import expect from "expect";
import BMRCalc from "./BMR.js";

// Values from https://www.calculator.net/bmr-calculator.html
// and https://www.bmi-calculator.net/bmr-calculator
// rounding adjusted.

describe("Testing BMR calculations", () => {
  test("Testing calculation: MSJE", () => {
    const bmr = BMRCalc({
      bwLbs: 160,
      bhFI: { feet: 5, inches: 5 },
      age: 18,
      gender: "m",
      roundedDown: true,
    });

    expect(bmr === 1672).toBe(true);
  });

  test("Testing calculation: RHBE", () => {
    const bmr = BMRCalc({
      bwLbs: 160,
      bhFI: { feet: 5, inches: 5 },
      age: 18,
      gender: "m",
      roundedDown: true,
      type: "RHBE",
    });

    expect(bmr === 1750).toBe(true);
  });

  test("Testing calculation: Profile 2", () => {
    const bmr = BMRCalc({
      bwLbs: 180,
      bhFI: { feet: 5, inches: 11 },
      age: 55,
      gender: "f",
      roundedDown: true,
    });

    expect(bmr === 1507).toBe(true);
  });
});
