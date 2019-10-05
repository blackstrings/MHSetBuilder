import {SKLQry} from "./SKLQry";
import {SKL} from "./SKL";

export class Query {
    constructor(public skills: SKLQry[], public extraSlots: number[], public armorTierFilter: number = 0){
    }
}
