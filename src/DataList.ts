import {AType} from './AType';
import {Cat} from './Cat';
import {SKL} from './SKL';

export const GemData = [
    {name: 'attack', tier: 1, skls: [SKL.ATK], cat: Cat.DPS},
    {name: 'defense', tier: 1, skls: [SKL.DEF], cat: Cat.SURV},
    {name: 'handicraft', tier: 3, skls: [SKL.HANDICRAFT], cat: Cat.DPS},
    {name: 'critical eye', tier: 1, skls: [SKL.CRIT_EYE], cat: Cat.DPS}
];

export const AmrData = [
    {name: 'bone helm alpha+', at: AType.HEAD, def: 114, slots: [3], skls: [SKL.HP, SKL.HP, SKL.PART_BREAKER], tier: 2},
    {name: 'bone mail alpha+', at: AType.CHEST, def: 114, slots: [2], skls: [SKL.ATK, SKL.ATK, SKL.HP], tier: 2},
    {name: 'bone vambraces alpha+', at: AType.ARM, def: 114, slots: [2], skls: [SKL.SLUGGER, SKL.SLUGGER, SKL.ATK], tier: 2},
    {name: 'bone coil alpha+', at: AType.WAIST, def: 114, slots: [3], skls: [SKL.HORN_MEASTRO, SKL.PART_BREAKER], tier: 2},
    {name: 'bone greaves alpha+', at: AType.LEG, def: 114, slots: [3], skls: [SKL.SLUGGER, SKL.HORN_MEASTRO], tier: 2},

    {name: 'bone helm beta+', at: AType.HEAD, def: 114, slots: [4], skls: [SKL.HP, SKL.PART_BREAKER], tier: 2},
    {name: 'bone mail beta+', at: AType.CHEST, def: 114, slots: [4,1], skls: [SKL.ATK], tier: 2},
    {name: 'bone vambraces beta+', at: AType.ARM, def: 114, slots: [4,1], skls: [SKL.SLUGGER], tier: 2},
    {name: 'bone coil beta+', at: AType.WAIST, def: 114, slots: [4,1], skls: [SKL.HORN_MEASTRO], tier: 2},
    {name: 'bone greaves beta+', at: AType.LEG, def: 114, slots: [4], skls: [SKL.SLUGGER], tier: 2},

    {name: 'alloy helm alpha+', at: AType.HEAD, def: 114, slots: [2], skls: [SKL.WIND_PROOF,SKL.DEF], tier: 2},
    {name: 'alloy mail alpha+', at: AType.CHEST, def: 114, slots: [3], skls: [SKL.WTR_RES,SKL.WTR_RES,SKL.WTR_RES,SKL.DEF], tier: 2},
    {name: 'alloy vambraces alpha+', at: AType.ARM, def: 114, slots: [], skls: [SKL.DEF, SKL.DEF, SKL.GRINDER], tier: 2},   // todo slot
    {name: 'alloy coil alpha+', at: AType.WAIST, def: 114, slots: [3], skls: [SKL.POI_RES, SKL.POI_RES, SKL.WIND_PROOF], tier: 2},
    {name: 'alloy greaves alpha+', at: AType.LEG, def: 114, slots: [3], skls: [SKL.GRINDER, SKL.GRINDER, SKL.WIND_PROOF], tier: 2},

    {name: 'alloy helm beta+', at: AType.HEAD, def: 114, slots: [4,1], skls: [SKL.WIND_PROOF], tier: 2},
    {name: 'alloy mail beta+', at: AType.CHEST, def: 114, slots: [4,1], skls: [SKL.WTR_RES], tier: 2},
    {name: 'alloy vambraces beta+', at: AType.ARM, def: 114, slots: [4,1], skls: [SKL.DEF, SKL.DEF], tier: 2},
    {name: 'alloy coil beta+', at: AType.WAIST, def: 114, slots: [4], skls: [SKL.POI_RES, SKL.WIND_PROOF], tier: 2},
    {name: 'alloy greaves beta+', at: AType.LEG, def: 114, slots: [4], skls: [SKL.GRINDER, SKL.WIND_PROOF], tier: 2},

    {name: 'vespoid helm alpha+', at: AType.HEAD, def: 116, slots: [3], skls: [SKL.SHEATH,SKL.PARA_ATK], tier: 2},
    {name: 'vespoid mail alpha+', at: AType.CHEST, def: 116, slots: [2,1], skls: [SKL.WIND_PROOF,SKL.WIND_PROOF], tier: 2},
    {name: 'vespoid vambraces alpha+', at: AType.ARM, def: 116, slots: [3], skls: [SKL.PARA_ATK, SKL.SHEATH], tier: 2},
    {name: 'vespoid coil alpha+', at: AType.WAIST, def: 116, slots: [3], skls: [SKL.PARA_RES, SKL.PARA_RES, SKL.SHEATH], tier: 2},
    {name: 'vespoid greaves alpha+', at: AType.LEG, def: 116, slots: [3], skls: [SKL.CRIT_DRAW, SKL.PARA_RES], tier: 2},

    {name: 'vespoid helm beta+', at: AType.HEAD, def: 116, slots: [4,1], skls: [SKL.SHEATH], tier: 2},
    {name: 'vespoid mail beta+', at: AType.CHEST, def: 116, slots: [4,1], skls: [SKL.WIND_PROOF], tier: 2},
    {name: 'vespoid vambraces beta+', at: AType.ARM, def: 116, slots: [4,1], skls: [SKL.PARA_ATK], tier: 2},
    {name: 'vespoid coil beta+', at: AType.WAIST, def: 116, slots: [3,1], skls: [SKL.PARA_RES, SKL.PARA_RES], tier: 2},
    {name: 'vespoid greaves beta+', at: AType.LEG, def: 116, slots: [4,1], skls: [SKL.CRIT_DRAW], tier: 2},

    {name: 'hornetaur helm alpha+', at: AType.HEAD, def: 116, slots: [2], skls: [SKL.WEAK_EXP, SKL.DRG_ATK, SKL.DRG_ATK], tier: 2},
    {name: 'hornetaur mail alpha+', at: AType.CHEST, def: 116, slots: [2,1], skls: [SKL.EFFLUVIA, SKL.HUNGER_RES, SKL.HUNGER_RES], tier: 2},
    {name: 'hornetaur vambraces alpha+', at: AType.ARM, def: 116, slots: [3], skls: [SKL.FREE_MEAL, SKL.HANDICRAFT], tier: 2},
    {name: 'hornetaur coil alpha+', at: AType.WAIST, def: 116, slots: [2], skls: [SKL.WEAK_EXP, SKL.HUNGER_RES], tier: 2},
    {name: 'hornetaur greaves alpha+', at: AType.LEG, def: 116, slots: [2,1], skls: [SKL.HANDICRAFT, SKL.DRG_ATK], tier: 2},

    {name: 'hornetaur helm beta+', at: AType.HEAD, def: 116, slots: [2], skls: [SKL.WEAK_EXP, SKL.DRG_ATK], tier: 2},
    {name: 'hornetaur mail beta+', at: AType.CHEST, def: 116, slots: [2,1], skls: [SKL.EFFLUVIA], tier: 2},
    {name: 'hornetaur vambraces beta+', at: AType.ARM, def: 116, slots: [3], skls: [SKL.FREE_MEAL], tier: 2},
    {name: 'hornetaur coil beta+', at: AType.WAIST, def: 116, slots: [2], skls: [SKL.WEAK_EXP], tier: 2},
    {name: 'hornetaur greaves beta+', at: AType.LEG, def: 116, slots: [2,1], skls: [SKL.HANDICRAFT], tier: 2},

    {name: 'kestodon gaurds alpha+', at: AType.ARM, def: 116, slots: [1,1], skls: [SKL.AFF_SLIDING, SKL.FOCUS, SKL.FOCUS], tier: 2},
    {name: 'kestodon gaurds beta+', at: AType.ARM, def: 116, slots: [4,1], skls: [SKL.AFF_SLIDING, SKL.FOCUS], tier: 2},

    {name: 'gajau boots alpha+', at: AType.LEG, def: 116, slots: [2,1], skls: [SKL.AQUATIC_POLAR, SKL.AQUATIC_POLAR, SKL.WTR_ATK, SKL.WTR_ATK], tier: 2},
    {name: 'gajau boots beta+', at: AType.LEG, def: 116, slots: [4,1], skls: [SKL.AQUATIC_POLAR, SKL.WTR_ATK, SKL.WTR_ATK], tier: 2},

    {name: 'gastadon horn alpha+', at: AType.HEAD, def: 116, slots: [1], skls: [SKL.FLINCH, SKL.FLINCH, SKL.BLAST_RES], tier: 2},
    {name: 'gastadon horn beta+', at: AType.HEAD, def: 116, slots: [4,1], skls: [SKL.FLINCH, SKL.BLAST_RES], tier: 2},

    {name: 'barnos jacket alpha+', at: AType.CHEST, def: 116, slots: [2,2], skls: [SKL.HEAT, SKL.IRON_SKIN, SKL.IRON_SKIN], tier: 2}, //todo slots
    {name: 'barnos jacket beta+', at: AType.CHEST, def: 116, slots: [4,2], skls: [SKL.HEAT, SKL.IRON_SKIN, SKL.IRON_SKIN], tier: 2},

    {name: 'wulg scarf alpha+', at: AType.HEAD, def: 116, slots: [2,1], skls: [SKL.ICE_RES, SKL.ICE_RES, SKL.MOUNTER], tier: 2},
    {name: 'wulg scarf beta+', at: AType.HEAD, def: 116, slots: [4,1], skls: [SKL.ICE_RES, SKL.MOUNTER], tier: 2},

    {name: 'cortos cape alpha+', at: AType.CHEST, def: 116, slots: [1,1], skls: [SKL.HUNGER_RES, SKL.HUNGER_RES, SKL.JUMP_MAST], tier: 2},
    {name: 'cortos cape beta+', at: AType.CHEST, def: 116, slots: [4], skls: [SKL.HUNGER_RES, SKL.JUMP_MAST], tier: 2},

];
