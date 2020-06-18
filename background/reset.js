var b = require('bonescript');
require("events");  

var EN  = 'P8_15';
var DIR = 'P8_16';
var MS1 = 'P8_17';
var STP = 'P8_18';
var MS2 = 'P8_19';
var step = 'HIGH';

resetEDPins();

function resetEDPins() {
    b.digitalWrite(STP, b.LOW);
    b.digitalWrite(DIR, b.LOW);
    b.digitalWrite(MS1, b.LOW);
    b.digitalWrite(MS2, b.LOW);
    b.digitalWrite(EN,  b.HIGH);
}
