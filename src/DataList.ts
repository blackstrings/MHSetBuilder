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
    {name: 'h1', at: AType.HEAD, def: 25, slots: [1], skls: [SKL.ATK], tier: 1},
    {name: 'h2', at: AType.HEAD, def: 30, slots: [3,2], skls: [SKL.DEF, SKL.DEF], tier: 1},
    {name: 'h3', at: AType.HEAD, def: 50, slots: [2], skls: [SKL.DEF, SKL.ATK, SKL.ATK], tier: 2},
    {name: 'c1', at: AType.CHEST, def: 35, slots: [2,2], skls: [SKL.ATK], tier: 1},
    {name: 'c2', at: AType.CHEST, def: 40, slots: [1], skls: [SKL.DEF], tier: 1},
    {name: 'c3', at: AType.CHEST, def: 50, slots: [1,1,1], skls: [SKL.ATK, SKL.ATK], tier: 2},
    {name: 'a1', at: AType.ARM, def: 20, slots: [1], skls: [SKL.ATK], tier: 1},
    {name: 'a2', at: AType.ARM, def: 25, slots: [], skls: [SKL.DEF], tier: 1},
    {name: 'a3', at: AType.ARM, def: 50, slots: [], skls: [SKL.ATK, SKL.ATK], tier: 2},
    {name: 'w1', at: AType.WAIST, def: 25, slots: [1], skls: [SKL.DEF, SKL.DEF], tier: 1},
    {name: 'w2', at: AType.WAIST, def: 29, slots: [3,1,1], skls: [SKL.ATK, SKL.CRIT_EYE], tier: 1},
    {name: 'w3', at: AType.WAIST, def: 50, slots: [1,1], skls: [SKL.ATK], tier: 2},
    {name: 'l1', at: AType.LEG, def: 9, slots: [1], skls: [SKL.ATK, SKL.ATK], tier: 1},
    {name: 'l2', at: AType.LEG, def: 5, slots: [1], skls: [SKL.DEF], tier: 1},
    {name: 'l3', at: AType.LEG, def: 50, slots: [1,1], skls: [SKL.DEF], tier: 2},
];
