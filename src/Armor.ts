
import {AType} from './AType';
import {Slot} from './Slot';
import {MHComponent} from './MHComponent';
import {SKL} from './SKL';
import {Gem} from './Gem';
import {SetBonus} from './SetBonus';

export class Armor extends MHComponent {
    public slots: Slot[] = [];

    constructor(name: string,
                public at: AType,
                public def: number,
                slots: number[],
                public skills: SKL[],
                public tier: number,
                public sb: SetBonus = SetBonus.NA
                )
    {
        super(name);

        slots.forEach( slot => {
            this.slots.push(new Slot(slot));
        });
    }

    /** currently not in use as buildset are doing the geming */
    // public add(gem: Gem): boolean {
    //     if(this.slots && this.slots.length){
    //         for(const slot of this.slots){
    //             if(slot.gem === null && slot.tier <= gem.tier){
    //                 slot.add(gem);
    //                 return true;
    //                 break;
    //             }
    //         }
    //     }
    //     return false;
    // }


}
