import {MHComponent} from './MHComponent';
import {Armor} from './Armor';
import {AType} from './AType';
import {Slot} from './Slot';
import {Gem} from './Gem';
import {SKL} from './SKL';
import {SetBonus} from './SetBonus';

/** does not accoutn for weapons or mantels, these should be added as slots instead */
export class BuildSet extends MHComponent {

    // todo add array of slots ref
    private armors: Armor[] = []; // contains all 5 pieces
    public head: Armor;
    public chest: Armor;
    public arm: Armor;
    public waist: Armor;
    public leg: Armor;

    public def: number = 0;
    public slots: Slot[] = [];
    public totalTier: number = 0;

    /**
     * can have multiple set bonuses.
     * When there is a complete set, extra skills will get put in here
     * to be accounted for
     */
    public setBonusSkills: SKL[] = [];

    constructor(name: string){
        super(name);
    }

    /** used for adding weapons or mantels that has slots */
    public addSlots(slots: number[]): void {
        if(slots && slots.length) {
            slots.forEach( s => {
                this.slots.push(new Slot(s));
            });
        }
    }

    public addArmor(armor: Armor): boolean {
        let isSuccess: boolean = false;

        if(armor){
            switch(true){
                case (armor.at === AType.HEAD):
                    this.addHead(armor);
                    break;
                case (armor.at === AType.CHEST):
                    this.addChest(armor)
                    break;
                case (armor.at === AType.ARM):
                    this.addArm(armor);
                    break;
                case (armor.at === AType.WAIST):
                    this.addWaist(armor);
                    break;
                case (armor.at === AType.LEG):
                    this.addLeg(armor);
                    break;
                default:
                    console.error('failed to add armor, default trigger');
                    break;
            }

            if(isSuccess){
                return true;
            }
            return false;
        }
    }

    /**
     * gem will fill in the lowest tier possible first.
     * There is a known bug where it sometimes doesn't fill in lowest first.
     */
    public addGem(gem: Gem): boolean {
        if(this.slots && this.slots.length){
            // find all free slots
            let freeSlots: Slot[] = this.slots.filter( s => s.gem === null);

            // sort from lowest tier to highest
            freeSlots = freeSlots.sort( (a,b) => a.tier - b.tier);

            // use the first free available one
            for(const slot of freeSlots){
                // you must validate before adding, seems to not work if you dont
                if(!slot.gem && slot.tier >= gem.tier){
                    return slot.add(gem);
                }
            }
        }
        return false;
    }

    /** returns the total skill count */
    public getSkillCount(targetSkill: SKL): number {
        let result: number = 0;

        // count from base armor
        this.armors.forEach( amr => {
            amr.skills.forEach( skl => {
                if(skl === targetSkill) {
                    result++;
                }
            });
        });

        // count set bonus skills - these get populated during buildSet creation
        this.setBonusSkills.forEach( s => {
           if(s === targetSkill){
               result++;
           }
        });

        // count from gems if slotted in
        this.slots.forEach(slot => {
            if(slot.gem) {
                slot.gem.skls.forEach( skl => {
                    if(skl === targetSkill) {
                        result++;
                    }
                });
            }
        });

        return result;
    }

    private addHead(amr: Armor): boolean {
        if(amr && amr.at === AType.HEAD && this.head !== null){
            this.head = amr;
            this.updateStats(amr);
            return true;
        }
        return false;
    }
    private addChest(amr: Armor): boolean {
        if(amr && amr.at === AType.CHEST && this.chest !== null){
            this.chest = amr;
            this.updateStats(amr);
            return true;
        }
        return false;
    }
    private addArm(amr: Armor): boolean {
        if(amr && amr.at === AType.ARM && this.arm !== null){
            this.arm = amr;
            this.updateStats(amr);
            return true;
        }
        return false;
    }
    private addWaist(amr: Armor): boolean {
        if(amr && amr.at === AType.WAIST && this.waist !== null){
            this.waist = amr;
            this.updateStats(amr);
            return true;
        }
        return false;
    }
    private addLeg(amr: Armor): boolean {
        if(amr && amr.at === AType.LEG && this.leg !== null){
            this.leg = amr;
            this.updateStats(amr);
            return true;
        }
        return false;
    }

    private updateStats(amr: Armor): void {
        this.armors.push(amr);

        // compute set bonuses when set has all 5 pieces
        if(this.armors.length === 5){
            this.computeSetBonuses();
        }

        // update stats
        this.def += amr.def;
        this.totalTier += amr.tier;

        // collect armor slots into the slots pool
        if(amr.slots.length) {
            this.slots.push(...amr.slots)
        };
    }

    /** use to check if there are any set bonuses that should activate, if so activate them */
    private computeSetBonuses(): void {
        let sbs: SetBonus[] = [];

        // collect all unique set bonuses
        this.armors.forEach( a => {
           if(a.sb && a.sb !== SetBonus.NA){
               sbs.push(a.sb);
           }
        });

        // create a unique array set, removing all duplicates
        sbs = [...new Set(sbs)];

        // evaluate if enough pieces to activate a set bonus
        // looping entire armors array per setBonus to validate
        sbs.forEach( sb => {
            let count: number = 0;
            this.armors.forEach( amr => {
                if(amr.sb === sb){
                    count++;
                }
            });

            // activate if enough pieces
            if(count >= sb.piecesReq){
                this.setBonusSkills.push(...sb.skls);
            }
        });

    }
}
