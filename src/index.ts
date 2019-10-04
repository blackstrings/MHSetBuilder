import {MHService} from './MHService';

// when running in index.html
/*
window.onload = function () {
    // Write TypeScript code!
    // const appDiv: HTMLElement = document.getElementById('app');
    //appDiv.innerHTML = 'test';

    const mhs: MHService = new MHService();
}
*/

// enable when running just ts-node or build for node src/index.js
const mhs: MHService = new MHService();

