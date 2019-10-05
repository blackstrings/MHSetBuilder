import {MHComponent} from './MHComponent';
import {SKL} from './SKL';

export class SetBonus extends MHComponent {

    protected static map: Map<String, SetBonus> = new Map<String, SetBonus>();

    /**
     *
     * @param name skill name
     * @param piecesReq number of pieces req to activate
     */
    constructor(name, public piecesReq: number, public skls: SKL[]){
        super(name);
    }

    public static readonly NA = new SetBonus('n/a', 0, []);
    public static readonly TEO = new SetBonus('teostra fierce', 2, [SKL.PART_BREAKER, SKL.PART_BREAKER]);

    public static get(name: string): SetBonus {
        return SetBonus.map.has(name) ? SetBonus.map.get(name) : null;
    }

    public toString(): string {
        return this.name;
    }

}
