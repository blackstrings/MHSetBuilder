import {MHComponent} from './MHComponent';
import {SKL} from './SKL';

export class SetBonus extends MHComponent {

    protected static map: Map<String, SetBonus> = new Map<String, SetBonus>();

    /**
     * SetBonus that have lvl1 lvl2 and so on should take into account how many skills the previous setBonus has already added.
     * @param name skill name
     * @param piecesReq number of pieces req to activate
     * @param derivedBonus means this set extends another prior set bonus, so to properly count accumulatively later
     */
    constructor(name, public piecesReq: number, public skls: SKL[]){
        super(name);
        SetBonus.map.set(name, this);
    }

    /** not available */
    public static readonly NA = new SetBonus('n/a', 0, []);
    public static readonly TEO = new SetBonus('teostra fierce', 2, [SKL.PART_BREAKER]);
    public static readonly TEO2 = new SetBonus('teostra fierce2', 4, [SKL.PART_BREAKER, SKL.PART_BREAKER]);

    public static get(name: string): SetBonus {
        return SetBonus.map.has(name) ? SetBonus.map.get(name) : null;
    }

    public toString(): string {
        return this.name;
    }

}
