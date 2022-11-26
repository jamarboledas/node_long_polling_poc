'use strict';

const DELAY = 1000;

global.connections = [];
global.tick = 0;

function polling() {
    setTimeout(function run() {
        console.log(global.tick);
    
        if (++global.tick > 10) {
            console.log('connections: ' + global.connections.length);
            global.connections.map(res => {
                res.write("END\n");
                res.end();
            });
            global.connections = [];
            global.tick = 0;
        }
    
        global.connections.map((res, i) => {
            res.write(`Hello ${i}! Tick: ${tick} \n`);
        });
    
        setTimeout(run, DELAY);
    
    }, DELAY);
}

module.exports = { polling };  