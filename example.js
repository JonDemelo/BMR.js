import BMRCalc from "./BMR.js";

const bmr = BMRCalc({
  bwLbs: 160,
  bhFI: { feet: 5, inches: 5 },
  age: 18,
  gender: "m",
  roundedDown: true,
});

console.log(bmr);

const bmrF = BMRCalc({
  bwLbs: 160,
  bhFI: { feet: 5, inches: 5 },
  age: 18,
  gender: "f",
  roundedDown: true,
});

console.log(bmrF);
