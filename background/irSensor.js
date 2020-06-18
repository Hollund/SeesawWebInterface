var b = require('bonescript');
require("events");

irSensorSetup(200, "on");

function irSensorSetup(arg, doprint) {
    console.log('wup', Date.now());

    b.pinMode('P8_7',  b.INPUT);
    b.pinMode('P8_8',  b.INPUT);
    b.pinMode('P8_9',  b.INPUT);
    b.pinMode('P8_10', b.INPUT);
    b.pinMode('P8_11', b.INPUT);
    b.pinMode('P8_12', b.INPUT);
    b.pinMode('P8_13', b.INPUT);
    b.pinMode('P8_14', b.INPUT);

    irprint = doprint;
    setInterval(irRunning, arg, doprint);
}

function irstop() {
    console.log("stopping ir reading interval");
    clearInterval(irRunning);
}

function irRunning() {
    //console.log("ir sensor running");
    //console.log(b.digitalRead('P8_7', printStatus));
    //console.log(b.digitalRead('P8_7'));
    const array = [
        'P8_7',
        'P8_9',
        'P8_11',
        'P8_13',
        'P8_14',
        'P8_12',
        'P8_10',
        'P8_8'];
    
        arrayout = [];

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
        if (b.digitalRead(element) == '1') {
            arrayout[index] = b.digitalRead(element);       
        }
        else{
            arrayout[index] = b.digitalRead(element); 
        }
    }

    console.log(arrayout, Date.now);
    return arrayout
}

function printStatus(x) {
    //console.log(x);
    return x.value;
}





function printPinMux(x) {
    console.log('mux = ' + x.mux);
    console.log('pullup = ' + x.pullup);
    console.log('slew = ' + x.slew);
    if(x.options) 
        console.log('options = ' + x.options.join(','));
    console.log('pin = ' + x.pin);
    console.log('name = ' + x.name);
    console.log('err = ' + x.err);
}