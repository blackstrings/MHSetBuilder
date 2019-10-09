import {AType} from './AType';
import {Cat} from './Cat';
import {SKL} from './SKL';
import {SetBonus} from './SetBonus';

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

    {name: 'test helm+', at: AType.HEAD, def: 116, slots: [4,1], skls: [SKL.SHEATH], tier: 2, sbs: [SetBonus.TEO, SetBonus.TEO2]},
    {name: 'test mail beta+', at: AType.CHEST, def: 116, slots: [4,1], skls: [SKL.WIND_PROOF], tier: 2, sbs: [SetBonus.TEO, SetBonus.TEO2]},
    {name: 'test vambraces beta+', at: AType.ARM, def: 116, slots: [4,1], skls: [SKL.PARA_ATK], tier: 2, sbs: [SetBonus.TEO, SetBonus.TEO2]},
    {name: 'test coil beta+', at: AType.WAIST, def: 116, slots: [3,1], skls: [SKL.PARA_RES, SKL.PARA_RES], tier: 2, sbs: [SetBonus.TEO, SetBonus.TEO2]},
    {name: 'test greaves beta+', at: AType.LEG, def: 116, slots: [4,1], skls: [SKL.CRIT_DRAW], tier: 2, sbs: [SetBonus.TEO, SetBonus.TEO2]},

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
    {name: 'hornetaur mail alpha+', at: AType.CHEST, def: 116, slots: [2,1], skls: [SKL.EFFLU_EXP, SKL.HUNGER_RES, SKL.HUNGER_RES], tier: 2},
    {name: 'hornetaur vambraces alpha+', at: AType.ARM, def: 116, slots: [3], skls: [SKL.FREE_MEAL, SKL.HANDICRAFT], tier: 2},
    {name: 'hornetaur coil alpha+', at: AType.WAIST, def: 116, slots: [2], skls: [SKL.WEAK_EXP, SKL.HUNGER_RES], tier: 2},
    {name: 'hornetaur greaves alpha+', at: AType.LEG, def: 116, slots: [2,1], skls: [SKL.HANDICRAFT, SKL.DRG_ATK], tier: 2},

    {name: 'hornetaur helm beta+', at: AType.HEAD, def: 116, slots: [2], skls: [SKL.WEAK_EXP, SKL.DRG_ATK], tier: 2},
    {name: 'hornetaur mail beta+', at: AType.CHEST, def: 116, slots: [2,1], skls: [SKL.EFFLU_EXP], tier: 2},
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

    {name: 'jagras helm alpha+', at: AType.HEAD, def: 116, slots: [2], skls: [SKL.SPEED_EAT, SKL.SPEED_EAT, SKL.ATK, SKL.ATK], tier: 2},
    {name: 'jagras mail alpha+', at: AType.CHEST, def: 116, slots: [3], skls: [SKL.EVADE_EXT, SKL.ATK], tier: 2},
    {name: 'jagras vambraces alpha+', at: AType.ARM, def: 116, slots: [2], skls: [SKL.EVADE_EXT, SKL.EVADE_EXT, SKL.REC_UP], tier: 2},
    {name: 'jagras coil alpha+', at: AType.WAIST, def: 116, slots: [2,1], skls: [SKL.REC_UP, SKL.SPEED_EAT], tier: 2},
    {name: 'jagras greaves alpha+', at: AType.LEG, def: 116, slots: [2,1], skls: [SKL.FREE_MEAL, SKL.REC_UP], tier: 2},

    {name: 'jagras helm beta+', at: AType.HEAD, def: 116, slots: [4,1], skls: [SKL.SPEED_EAT,SKL.ATK], tier: 2},
    {name: 'jagras mail beta+', at: AType.CHEST, def: 116, slots: [4], skls: [SKL.EVADE_EXT, SKL.ATK], tier: 2},
    {name: 'jagras vambraces beta+', at: AType.ARM, def: 116, slots: [4], skls: [SKL.EVADE_EXT, SKL.REC_UP], tier: 2},
    {name: 'jagras coil beta+', at: AType.WAIST, def: 116, slots: [4,1], skls: [SKL.REC_UP], tier: 2},
    {name: 'jagras greaves beta+', at: AType.LEG, def: 116, slots: [4,1], skls: [SKL.FREE_MEAL], tier: 2},

    {name: 'tzitzi helm alpha+', at: AType.HEAD, def: 116, slots: [2,1], skls: [SKL.FREE_ELE, SKL.STUN_RES], tier: 2},
    {name: 'tzitzi mail alpha+', at: AType.CHEST, def: 116, slots: [1,1], skls: [SKL.CONSTITU, SKL.CONSTITU, SKL.WTR_ATK, SKL.WTR_ATK], tier: 2},
    {name: 'tzitzi vambraces alpha+', at: AType.ARM, def: 116, slots: [2], skls: [SKL.STUN_RES, SKL.STUN_RES, SKL.WIDE_RANGE, SKL.WIDE_RANGE], tier: 2},
    {name: 'tzitzi coil alpha+', at: AType.WAIST, def: 116, slots: [2], skls: [SKL.WIDE_RANGE, SKL.WIDE_RANGE, SKL.WTR_ATK, SKL.WTR_ATK], tier: 2},
    {name: 'tzitzi greaves alpha+', at: AType.LEG, def: 116, slots: [3], skls: [SKL.SLEEP_RES, SKL.SLEEP_RES, SKL.WIDE_RANGE], tier: 2},

    {name: 'tzitzi helm beta+', at: AType.HEAD, def: 116, slots: [4,1], skls: [SKL.FREE_ELE], tier: 2},
    {name: 'tzitzi mail beta+', at: AType.CHEST, def: 116, slots: [4,1], skls: [SKL.CONSTITU, SKL.WTR_ATK], tier: 2},
    {name: 'tzitzi vambraces beta+', at: AType.ARM, def: 116, slots: [4], skls: [SKL.STUN_RES, SKL.STUN_RES, SKL.WIDE_RANGE], tier: 2},
    {name: 'tzitzi coil beta+', at: AType.WAIST, def: 116, slots: [4,1], skls: [SKL.WIDE_RANGE, SKL.WIDE_RANGE], tier: 2},
    {name: 'tzitzi greaves beta+', at: AType.LEG, def: 116, slots: [4], skls: [SKL.SLEEP_RES, SKL.WIDE_RANGE], tier: 2},

    {name: 'girros headgear alpha+', at: AType.HEAD, def: 116, slots: [3], skls: [SKL.HORN_MEASTRO, SKL.HORN_MEASTRO, SKL.PARA_RES], tier: 2},
    {name: 'girros mail alpha+', at: AType.CHEST, def: 116, slots: [2], skls: [SKL.PARA_RES, SKL.PARA_RES, SKL.FREE_ELE], tier: 2},
    {name: 'girros vambraces alpha+', at: AType.ARM, def: 116, slots: [1], skls: [SKL.FREE_ELE, SKL.EFFLU_RES, SKL.EFFLU_RES], tier: 2},
    {name: 'girros coil alpha+', at: AType.WAIST, def: 116, slots: [3], skls: [SKL.EFFLU_EXP, SKL.PARA_ATK, SKL.PARA_ATK], tier: 2},
    {name: 'girros greaves alpha+', at: AType.LEG, def: 116, slots: [1], skls: [SKL.PARA_ATK, SKL.PARA_ATK, SKL.FREE_ELE], tier: 2},

    {name: 'girros headgear beta+', at: AType.HEAD, def: 116, slots: [4], skls: [SKL.HORN_MEASTRO, SKL.HORN_MEASTRO], tier: 2},
    {name: 'girros mail beta+', at: AType.CHEST, def: 116, slots: [4,2], skls: [SKL.PARA_RES, SKL.PARA_RES], tier: 2},
    {name: 'girros vambraces beta+', at: AType.ARM, def: 116, slots: [4], skls: [SKL.FREE_ELE, SKL.EFFLU_RES], tier: 2},
    {name: 'girros coil beta+', at: AType.WAIST, def: 116, slots: [4,2], skls: [SKL.EFFLU_EXP], tier: 2},
    {name: 'girros greaves beta+', at: AType.LEG, def: 116, slots: [4], skls: [SKL.PARA_ATK, SKL.PARA_ATK], tier: 2},

    {name: 'dodogama helm alpha+', at: AType.HEAD, def: 120, slots: [3], skls: [SKL.BLAST_RES, SKL.BLAST_RES, SKL.BOMBBARD], tier: 2},
    {name: 'dodogama mail alpha+', at: AType.CHEST, def: 120, slots: [2], skls: [SKL.BLAST_ATK, SKL.BLAST_ATK, SKL.ARTILLERY], tier: 2},
    {name: 'dodogama vambraces alpha+', at: AType.ARM, def: 120, slots: [2], skls: [SKL.BOMBBARD, SKL.BOMBBARD, SKL.BLAST_ATK], tier: 2},
    {name: 'dodogama coil alpha+', at: AType.WAIST, def: 120, slots: [2,1], skls: [SKL.ARTILLERY, SKL.ARTILLERY, SKL.BLAST_RES], tier: 2},
    {name: 'dodogama greaves alpha+', at: AType.LEG, def: 120, slots: [2,1], skls: [SKL.CAP_BST, SKL.BLAST_ATK], tier: 2},

    {name: 'dodogama helm beta+', at: AType.HEAD, def: 120, slots: [4], skls: [SKL.BLAST_RES, SKL.BLAST_RES], tier: 2},
    {name: 'dodogama mail beta+', at: AType.CHEST, def: 120, slots: [4], skls: [SKL.BLAST_ATK, SKL.BLAST_ATK], tier: 2},
    {name: 'dodogama vambraces beta+', at: AType.ARM, def: 120, slots: [4], skls: [SKL.BOMBBARD, SKL.BLAST_ATK], tier: 2},
    {name: 'dodogama coil beta+', at: AType.WAIST, def: 120, slots: [4,1], skls: [SKL.ARTILLERY, SKL.ARTILLERY], tier: 2},
    {name: 'dodogama greaves beta+', at: AType.LEG, def: 120, slots: [4,1], skls: [SKL.CAP_BST], tier: 2},


];
