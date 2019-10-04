import {MHComponent} from './MHComponent';

export class SKL extends MHComponent {

    protected static map: Map<String, SKL> = new Map<String, SKL>();

    constructor(name, public value: number){
        super(name);
    }

    public static readonly ATK = new SKL('attack', 1);
    public static readonly DEF = new SKL('defense', 1);
    public static readonly CRIT_EYE = new SKL('critical eye', 1);
    public static readonly HANDICRAFT = new SKL('handicraft', 1);
    public static readonly MUSHROOM = new SKL('mushroommancer', 1);
    public static readonly PP = new SKL('peak performance', 1);

    public static get(name: string): SKL {
        return SKL.map.has(name) ? SKL.map.get(name) : null;
    }

    public toString(): string {
        return this.name;
    }

}
