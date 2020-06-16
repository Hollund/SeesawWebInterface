export function encoderData(name, val1, unit1, val2, unit2) {

  val1 = 1;
  unit1 = 0;
  val2 = 12;
  unit2 = "angle/s";
  return {
    name, val1, unit1, val2, unit2
  };
}