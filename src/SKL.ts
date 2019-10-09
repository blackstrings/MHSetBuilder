import {MHComponent} from './MHComponent';

export class SKL extends MHComponent {

    protected static map: Map<String, SKL> = new Map<String, SKL>();

    /**
     *
     * @param name skill name
     * @param surName a.k.a. gem name
     */
    constructor(name, public surName?: string){
        super(name);
        if(!this.surName){
            this.surName = name;
        }
        SKL.map.set(name, this);
    }

    public static readonly ATK = new SKL('attack booster');
    public static readonly HP = new SKL('health booster');
    public static readonly WIND_PROOF = new SKL('wind proof');
    public static readonly EFFLU_EXP = new SKL('effluvial expert');
    public static readonly EFFLU_RES = new SKL('effluvial resistance');
    public static readonly HUNGER_RES = new SKL('hunger resistance');
    public static readonly PART_BREAKER = new SKL('part breaker');
    public static readonly SHEATH = new SKL('quick sheath');
    public static readonly WEAK_EXP = new SKL('weakness exploit');
    public static readonly SPEED_EAT = new SKL('speed eating');
    public static readonly FREE_ELE = new SKL('free element ammo up', 'release');
    public static readonly CONSTITU = new SKL('constitution', 'physical');
    public static readonly WIDE_RANGE = new SKL('wide range', 'friendly');
    public static readonly SLEEP_RES = new SKL('sleep resistance');
    public static readonly STUN_RES = new SKL('stun resistance');
    public static readonly EVADE_EXT = new SKL('evade extender');
    public static readonly REC_UP = new SKL('recovery up');
    public static readonly DRG_ATK = new SKL('dragon attack');
    public static readonly PARA_ATK = new SKL('paralyze attack');
    public static readonly FREE_MEAL = new SKL('free meal');
    public static readonly PARA_RES = new SKL('paralyze resistance');
    public static readonly BOMBBARD = new SKL('bombardier');
    public static readonly ARTILLERY = new SKL('artillery');
    public static readonly CAP_BST = new SKL('capacity boost');
    public static readonly WTR_RES = new SKL('water resist');
    public static readonly DEF = new SKL('defense boost');
    public static readonly GRINDER = new SKL('speed sharpening');
    public static readonly CRIT_DRAW = new SKL('critical draw');
    public static readonly HORN_MEASTRO = new SKL('horn meastro');
    public static readonly POI_RES = new SKL('poison resistance');
    public static readonly SLUGGER = new SKL('slugger');
    public static readonly CRIT_EYE = new SKL('critical eye');
    public static readonly HANDICRAFT = new SKL('handicraft');
    public static readonly AFF_SLIDING = new SKL('affinity sliding');
    public static readonly FOCUS = new SKL('focus', 'charger');
    public static readonly MUSHROOM = new SKL('mushroom mancer');
    public static readonly PEAK = new SKL('peak performance');
    public static readonly AQUATIC_POLAR = new SKL('aquatic polar mobility');
    public static readonly DETECTOR = new SKL('detector');
    public static readonly FLINCH = new SKL('flinch free');
    public static readonly HEAT = new SKL('heat guard');
    public static readonly ICE_RES = new SKL('ice resistance');
    public static readonly MOUNTER = new SKL('master mounter');
    public static readonly JUMP_MAST = new SKL('jump master');
    public static readonly IRON_SKIN = new SKL('iron skin', 'defense down');
    public static readonly BLAST_RES = new SKL('blast resistance');
    public static readonly BLAST_ATK = new SKL('blast attack');
    public static readonly GEOLOGIST = new SKL('geologist');
    public static readonly WTR_ATK = new SKL('water attack');

    public static get(name: string): SKL {
        return SKL.map.has(name) ? SKL.map.get(name) : null;
    }

    public toString(): string {
        return this.name;
    }

}
