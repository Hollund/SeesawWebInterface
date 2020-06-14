export function sensorData(name, val1, unit1, val2, unit2) {
    val1 = 1;
    unit1 = "on/off";
    val2 = 500;
    unit2 = "mV";

  return {
    name, val1, unit1, val2, unit2
  };
}