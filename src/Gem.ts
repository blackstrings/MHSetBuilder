import {MHComponent} from './MHComponent';
import {Cat} from './Cat';
import {SKL} from './SKL';

export class Gem extends MHComponent {

    constructor(name: string,
                public tier: number,
                public skls: SKL[],
                public cat: Cat) {
        super(name);

        // saftey init skls to empty array if not
        if (skls = null) {
            skls = []
        }
    }

    public clone(): Gem {
        return new Gem(this.name, this.tier, this.skls.slice(0, this.skls.length), this.cat);
    }
}
