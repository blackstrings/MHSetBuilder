import {SKLQry} from "./SKLQry";
import {SKL} from "./SKL";
import {SetBonus} from "./SetBonus";

export class Query {
    constructor(public skills: SKLQry[], public extraSlots: number[], public setBonus: SetBonus[], public armorTierFilter: number = 0){

    }

}
