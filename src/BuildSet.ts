import {MHComponent} from './MHComponent';
import {Armor} from './Armor';
import {AType} from './AType';
import {Slot} from './Slot';
import {Gem} from './Gem';
import {SKL} from './SKL';

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

    public add(armor: Armor): boolean {
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

    public addGem(gem: Gem): boolean {
        if(this.slots && this.slots.length){
            // find all free slots
            let freeSlots: Slot[] = this.slots.filter( s => s.gem === null);
            // sort from lowest tier to highest
            freeSlots = freeSlots.sort( (a,b) => a.tier - b.tier);
            // use the first free available one
            for(const slot of freeSlots){
                if(!slot.gem && slot.tier >= gem.tier){
                    return slot.add(gem);
                }
            }
        }
        return false;
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
        this.def += amr.def;
        this.totalTier += amr.tier;
        if(amr.slots.length) {this.slots.push(...amr.slots)};
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
}
