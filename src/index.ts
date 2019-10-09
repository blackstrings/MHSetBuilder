import {MHService} from './MHService';

// when running in index.html
/*
window.onload = function () {
    const mhs: MHService = new MHService();

    // Write TypeScript code!
    const appDiv: HTMLElement = document.getElementById('app');
    // appDiv.innerHTML = 'test2';

    const sc: HTMLElement = document.getElementById('skills-container');
    const input: HTMLInputElement = Utls.createInput('testInput');

    sc.appendChild(input);

    // const body: HTMLElement = document.body;
    // const appDiv: HTMLElement = document.createElement('div');//.getElementById('app');
    // body.appendChild(appDiv);
}

class Utls {

    public static createInput(value: string): HTMLInputElement {
        const input: HTMLInputElement = document.createElement('input');
        input.value = value;
        return input;
    }
}
*/


// enable when running just ts-node or build for node src/index.js
const mhs: MHService = new MHService();

