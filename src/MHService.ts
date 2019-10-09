import {BuildSet} from './BuildSet';
import {GemData, AmrData} from './DataList';
import {Armor} from './Armor';
import {AType} from './AType';
import {SKL} from './SKL';
import {Gem} from './Gem';
import {SKLQry} from './SKLQry';
import {Slot} from './Slot';
import {Query} from './Query';
import {SetBonus} from "./SetBonus";

export class MHService {

    /** populated gem data */
    private gems: Gem[] = [];

    /** populated armor data */
    private armors: Armor[] = [];

    constructor(){

        this.populateData();

        // test - extra slots compensates for weapons and mantels
        // todo order shouldn't matter but right now it does, high tier has to go first
        const query = new Query([new SKLQry(SKL.CRIT_EYE, 3), new SKLQry(SKL.HANDICRAFT, 5)], [1,1], [SetBonus.TEO2], 0);

        this.querySets(query, true);

    }

    /**
     * todo when set bonuses are requested, we can optimize querying for sets that will never be possible
     * by creating combinations starting first with only set bonuses activated
     * @param query
     * @param showLog
     */
    public querySets(query: Query, showLog: boolean = false): void {
        // fix the query so highest tier skill comes first
        query.skills = this.sortSkillByTier(query.skills);

        console.log('Finding sets for: ');

        // log input query
        console.log(this.getQueryAsString(query));

        // send the query through and start finding the builds
        const setResults: BuildSet[] = this.getBuildSets(query);

        if(showLog){
            console.log(setResults);
        } else {
            console.log('log build sets is disabled');
        }
    }

    private getQueryAsString(query: Query): string {
        let queryStr: string = '';
        query.skills.forEach( s => {
            queryStr += '[' + s.skl.name + ', ' + s.min + '], ';
        });

        let setBonuses: string = '[';
        query.setBonus.forEach( sb => {
           setBonuses += sb.toString() + ', ';
        });
        setBonuses += '], ';
        queryStr += setBonuses;

        queryStr += 'armor tier: ';

        let armorTierFilter: string = '';
        switch(query.armorTierFilter){
            case 2:
                armorTierFilter = 'MR only';
                break;
            case 1:
                armorTierFilter = 'HR only';
            default:
                armorTierFilter = 'HR & MR';
        }
        queryStr += armorTierFilter;
        return queryStr;
    }

    /** re orders the skills, highest tier comes first */
    private sortSkillByTier(sq: SKLQry[]): SKLQry[] {
        return sq.sort( (a,b) => this.getGem(b.skl).tier - this.getGem(a.skl).tier);
    }

    /** Deserialize all json data into data objects for runtime */
    private populateData(): void {
        GemData.forEach( gem => {
            this.gems.push( new Gem(gem.name, gem.tier, gem.skls, gem.cat) );
        });

        AmrData.forEach( a => {
            this.armors.push(new Armor(a.name, a.at, a.def, a.slots, a.skls, a.tier, a.sbs));
        });
    }

    /** create a single set from the pieces provided */
    private createBuildSet(name: string, data: Armor[], extraSlots: number[]): BuildSet {
        const bs: BuildSet = new BuildSet(name);
        data.forEach(a => {
            bs.addArmor(a);
        });

        // when extra slots is requested, add more slots onto the set
        if(extraSlots && extraSlots.length){
            bs.addSlots(extraSlots);
        }
        return bs;
    }

    /**
     * query = the skills to create and filter
     * extraSlots = use this for mantles or weapons with extra slots ex: [3,2,2] = 3 slots with teir 3, 2, 2
     */
    private getBuildSets(query: Query): BuildSet[] {
        const date: Date = new Date();
        const startTime = date.getMilliseconds();

        // to count as we make each set
        let counter: number = 0;

        // as we filter each time, store the sets here
        let tempSets: BuildSet[] = [];

        // the final result
        let resultSets: BuildSet[] = [];

        // make all possible combination from all armor pieces without any filers applied
        // the max possible combination depends on the number in each category multiply to the number apprent in each category
        // ex: 2(heads) * 3(chest) * 2(arms) * 2(legs) = 24 total possible combination
        // for best results, we have to create all the combinations posssible first
        // then filter from there using queries
        let allArmorSets: Armor[][] = this.getAllPossibleSetCombination(query.armorTierFilter);
        console.log('max possible combinations: ' + allArmorSets.length);

        allArmorSets.forEach( armorSet => {
            // extra slots gets added to every combination if requested
            const buildSet: BuildSet = this.createBuildSet(''+counter, armorSet, query.extraSlots);

            // if there is set bonus query to filter, only consider the build sets matching the query setBonuses
            if(query.setBonus.length){
                this.filterBuildSetWithQualifyingSetBonusOnly(query, tempSets, buildSet);
            } else {
                // otherwise analyze all build sets when there is no set bonus to filter for (more heavier performance)
                tempSets.push(buildSet);
            }
            counter++;
        });

        if(tempSets.length){
            if(query.setBonus.length){
                console.log('filter: setBonuses, found: ' + tempSets.length);
            }
            // filter SetBuilds by skills as a last and final priority
            resultSets = this.filterBuildSetsWithSkills(query, tempSets);
        } else {
            console.warn('query set is not possible');
        }

        // calc total query time
        const totalQueryTime = new Date().getMilliseconds() - startTime;
        console.log( (totalQueryTime / 1000).toFixed(2) + ' second');
        return resultSets;
    }

    private filterBuildSetWithQualifyingSetBonusOnly(query: Query, tempSets: BuildSet[], activeBuildSet: BuildSet): void {
        let sbMatchReqCounter: number = 0;

        // add only buildSet that have an active set bonus matching the query
        query.setBonus.forEach( querySb => {
            activeBuildSet.activeSetBonuses.forEach( asb => {
                if(asb === querySb){
                    sbMatchReqCounter++;
                }
            });
        });

        // we only add the buildSet if it has all the required sb requested in query
        if(sbMatchReqCounter === query.setBonus.length){
            tempSets.push(activeBuildSet);
        } // else it means although the set may have a matching set bonus, build set does not have all the req sb requested

    }

    private filterBuildSetsWithSkills(query: Query, tempSets: BuildSet[]): BuildSet[] {
        let resultSets: BuildSet[] = [];
        // tempSets.sort( (a,b) => b.getSkillCount(SKL.ATK) - a.getSkillCount(SKL.ATK));
        let isFilterProgressError: boolean = true;
        for(const sq of query.skills){

            // try setting gems into slots to reach the min req queried
            this.gemAllSetsWithSkillToMin(tempSets, sq.skl, sq.min);

            // if tempSets return filters eventually reaches zero items, regardless of the filter order,
            // it just means the query can never be full filled
            // meaning such build cannot exist
            tempSets = tempSets.filter( ts => ts.getSkillCount(sq.skl) >= sq.min );
            console.log('filter: ' + sq.skl.name + ', found: ' + tempSets.length);
            if(tempSets && !tempSets.length){
                isFilterProgressError = false;
                break;
            }
        };

        if(isFilterProgressError){
            // sort by def
            //tempSets.sort( (a,b) => b.def - a.def);

            //filter build sets to top 50 only
            console.log('showing max 50 only for now');
            const maxLimit: number = 50;
            resultSets = tempSets.slice(0, maxLimit);

        } else {
            console.warn('Build set not possible');
        }
        return resultSets;
    }

    private gemAllSetsWithSkillToMin(sets: BuildSet[], skl: SKL, min: number): void {
        if(sets && sets.length){
            sets.forEach( set => {

                // when success is false, it'll stop trying to add as it can't add anymore gems
                // when skillCount is min or higher, it'll stop as no need to add more
                let success: boolean = true;
                while(success && set.getSkillCount(skl) < min){
                    success = set.addGem(this.getGem(skl));
                }

            });
        } else {
            console.warn('no sets to gem, as filters probably have reached zero');
        }
    }

    private getGem(skl: SKL): Gem {
        if(skl && this.gems){
            const gem: Gem = this.gems.find( gem => gem.skls.indexOf(skl) >= 0);
            if(gem){
                // may not need to clone
                return gem;
            }
            throw new Error('failed to get gem, no gem of the following skl was found: ' + skl.name);
        }
        //return this.gems.find( g => g.skls.indexOf(skl))[;
        return null;
    }

    /**
     * returns all armor combination sets, each set containing 5 pieces,
     * set filterTier to any value other than 0 to filter by tier
     */
    private getAllPossibleSetCombination(armorTierFilter: number = 0) {
        const heads: Armor[] = this.getAllArmor(AType.HEAD, armorTierFilter);
        const chests: Armor[] = this.getAllArmor(AType.CHEST, armorTierFilter);
        const arms: Armor[] = this.getAllArmor(AType.ARM, armorTierFilter);
        const waists: Armor[] = this.getAllArmor(AType.WAIST, armorTierFilter);
        const legs: Armor[] = this.getAllArmor(AType.LEG, armorTierFilter);
        const allArmorData: Armor[][] = [heads, chests, arms, waists, legs];
        const arg = allArmorData;

        // generates all posssible combination of head,chest,arm,waist,leg
        let r = [], max = arg.length-1;
        function helper(arr, i) {
            for (var j=0, l=arg[i].length; j<l; j++) {
                var a = arr.slice(0); // clone arr
                a.push(arg[i][j]);
                if (i==max) {
                    r.push(a);
                } else
                    helper(a, i+1);
            }
        }
        helper([], 0);
        return r;
    }

    /** a way to dynamically build filters - not yet in use*/
    filterItems(bs: BuildSet[], filters) {
        return bs.filter(function(val) {
            let result = true;
            for(var i = 0; i < filters.length; i++)
                if(val['item'][filters[i][0]] != filters[i][1])
                    result = false;
            return result;
        });
    }


    private filterArmorByDef(armors: Armor[], highest: boolean = true): Armor {
        if(armors){
            if(highest){
                return armors.reduce( (p,n) => {
                    if(p.def > n.def) {
                        return p;
                    }
                    return n;
                });
            } else {
                return armors.reduce( (p,n) => {
                    if(p.def < n.def) {
                        return p;
                    }
                    return n;
                });
            }
        }
        return null;
    }

    /** when tier is any value other than zero, filters only by tier */
    private getAllArmor(at: AType, tier: number = 0): Armor[] {
        if(this.armors){
            if(tier >= 1){
                // filter by teir
                return this.armors.filter( a => (a.at === at) && (a.tier == tier));
            }
            // include all teir
            return this.armors.filter( a => (a.at === at));
        }
    }

}
