var b = require('bonescript');
require("events");  

var EN  = 'P8_15';
var DIR = 'P8_16';
var MS1 = 'P8_17';
var STP = 'P8_18';
var MS2 = 'P8_19';
var step = 'HIGH';

var rightup = "true";
var leftup  = "true";

mdsetup(200);
setInterval(StepForwardDefault, 200);

function mdsetup(timerval) {
    b.pinMode(STP, b.OUTPUT);
    b.pinMode(DIR, b.OUTPUT);
    b.pinMode(MS1, b.OUTPUT);
    b.pinMode(MS2, b.OUTPUT);
    b.pinMode(EN,  b.OUTPUT); 

    resetEDPins(); //Set step, direction, microstep and enable pins to default states


}

function StepForwardDefault(){ 

    b.digitalWrite(DIR, b.HIGH); //Pull direction pin low to move "forward"
    b.digitalWrite(EN, b.LOW); // enable Pin

    if (step == 'HIGH') {
        b.digitalWrite(STP, b.HIGH);
        step = 'LOW';
        console.log("high step");
        
    }
    else if (step == 'LOW') {
        b.digitalWrite(STP, b.LOW);
        step = 'HIGH';
        console.log("low step");
    
    }
}

function StepForwardDefault(){ 

    b.digitalWrite(DIR, b.LOW); //Pull direction pin low to move "forward"
    b.digitalWrite(EN, b.LOW); // enable Pin

    if (step == 'HIGH') {
        b.digitalWrite(STP, b.HIGH);
        step = 'LOW';
        console.log("high step");
        
    }
    else if (step == 'LOW') {
        b.digitalWrite(STP, b.LOW);
        step = 'HIGH';
        console.log("low step");
    
    }
}

function clearstep() {
    resetEDPins();
}

//Reset Easy Driver pins to default states
function resetEDPins() {
    b.digitalWrite(STP, b.LOW);
    b.digitalWrite(DIR, b.LOW);
    b.digitalWrite(MS1, b.LOW);
    b.digitalWrite(MS2, b.LOW);
    b.digitalWrite(EN,  b.HIGH);
}

function printStatus(x) {
    console.log('value = ' + x.value);
    console.log('err = ' + x.err);
}

function printPinMux(x) {
    console.log('mux = ' + x.mux);
    console.log('pullup = ' + x.pullup);
    console.log('slew = ' + x.slew);
    console.log('options = ' + x.options.join(','));
    console.log('err = ' + x.err);
}