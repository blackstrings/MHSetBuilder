import {MHComponent} from './MHComponent';
import {Gem} from './Gem';

export class Slot extends MHComponent{

    public gem: Gem = null;

    constructor(public tier: number){
        super(name);
    }

    /** returns true if success, false if not */
    public add(gem: Gem): boolean {
        if(gem && gem.tier <= this.tier){
            this.gem = gem;
            this.name = gem.name;
            return true;
        }
        return false;
    }

    public remove(): void {
        this.gem = null;
    }
}
