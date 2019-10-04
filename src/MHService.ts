import {BuildSet} from './BuildSet';
import {GemData, AmrData} from './DataList';
import {Armor} from './Armor';
import {AType} from './AType';
import {SKL} from './SKL';
import {Gem} from "./Gem";
import {Slot} from './Slot';

export class MHService {

    /** populated gem data */
    private gems: Gem[] = [];

    /** populated armor data */
    private armors: Armor[] = [];

    constructor(){

        // populate data
        this.populateData();

        // test - extra slots compensates for weapons and mantels
        // todo order shouldn't matter but right now it does, high tier has to go first
        const query =
            {
                skills: [
                    {skl: SKL.HANDICRAFT, min: 1},
                    {skl: SKL.CRIT_EYE, min: 7},
                    {skl: SKL.ATK, min: 7},
                ],
                extraSlots: [1,1]
            }
        this.querySets(query);

    }

    public querySets(query: {skills: {skl: SKL, min: number}[], extraSlots: number[]} ): void {
        const results: BuildSet[] = this.getBuildSets(query);
        console.log(results);
    }

    /** Deserialize all json data into data objects for runtime */
    private populateData(): void {
        GemData.forEach( gem => {
            this.gems.push( new Gem(gem.name, gem.tier, gem.skls, gem.cat) );
        });

        AmrData.forEach( a => {
            this.armors.push(new Armor(a.name, a.at, a.def, a.slots, a.skls, a.tier));
        });
    }

    /** create a single set from the pieces provided */
    private createBuildSet(name: string, data: Armor[], extraSlots: number[]): BuildSet {
        const bs: BuildSet = new BuildSet(name);
        data.forEach(a => {
            bs.add(a);
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
    private getBuildSets(query: {skills: {skl: SKL, min: number}[], extraSlots: number[]} ): BuildSet[] {
        const date: Date = new Date();
        const startTime = date.getMilliseconds();

        // to count as we make each set
        let counter: number = 0;

        // as we filter store the sets here
        let tempSets: BuildSet[] = [];

        // the final result
        let resultSets: BuildSet[];

        // make all possible combination from all armor pieces without any filers applied
        // the max possible combination depends on the number in each category multiply to the number apprent in each category
        // ex: 2(heads) * 3(chest) * 2(arms) * 2(legs) = 24 total possible combination
        // for best results, we have to create all the combinations posssible first
        // then filter from there using queries
        let allSetCombinations: Armor[][] = this.getAllPossibleSetCombination();
        console.log('all total armor sets possible: ' + allSetCombinations.length);

        // extra slots gets added to eveyr combination if requested
        allSetCombinations.forEach( armorSet => {
            tempSets.push(this.createBuildSet('b' + counter, armorSet, query.extraSlots));
            counter++;
        });

        // apply query(s)
        // tempSets.sort( (a,b) => b.getSkillCount(SKL.ATK) - a.getSkillCount(SKL.ATK));
        query.skills.forEach( skillObj => {
            const sklObj: {skl: SKL, min: number} = skillObj;

            // try gemming into slots to reach the min req
            this.gemAllSetsWithSkillToMin(tempSets, skillObj.skl, skillObj.min);

            // if tempSets return filters eventually reaches zero items, regardless of the filter order,
            // it just means the query can never be full filled
            // meaning such build cannot exist
            tempSets = tempSets.filter( ts => ts.getSkillCount(sklObj.skl) >= sklObj.min );
            console.log('filter: ' + sklObj.skl.name + ', min ' + sklObj.min + ', sets made: ' + tempSets.length);
        });

        // sort by def
        //tempSets.sort( (a,b) => b.def - a.def);

        //filter build sets to top 50 only
        const maxLimit: number = 50;
        resultSets = tempSets.slice(0, maxLimit);

        // calc total query time
        const totalQueryTime = new Date().getMilliseconds() - startTime;
        console.log( (totalQueryTime / 1000).toFixed(2) + ' second');

        return resultSets
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
    private getAllPossibleSetCombination(filterTier: number = 0) {
        const heads: Armor[] = this.getAllArmor(AType.HEAD, filterTier);
        const chests: Armor[] = this.getAllArmor(AType.CHEST, filterTier);
        const arms: Armor[] = this.getAllArmor(AType.ARM, filterTier);
        const waists: Armor[] = this.getAllArmor(AType.WAIST, filterTier);
        const legs: Armor[] = this.getAllArmor(AType.LEG, filterTier);
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

    /** when tier is any value other than zero, filter by teir */
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
