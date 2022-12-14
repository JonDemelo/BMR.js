import BMRCalc from "./BMR.js";

const bmr = BMRCalc({
  bwLbs: 170,
  bhFI: { feet: 5, inches: 11 },
  age: 20,
  gender: "m",
  roundedDown: true,
});

console.log(bmr);
