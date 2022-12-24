export default function BMR(_opts) {
  // Options.
  let bwKG = _opts.bwKG; // Body weight in KGs.
  const bwLbs = _opts.bwLbs; // Body weight in Lbs.
  let bhCM = _opts.bhCM; // Body height in CM.
  const bhFI = _opts.bhFI; // Body height in Feet/inches. i.e., {feet: f, inches: i} ex. {feet: 5, inches: 11}
  const age = _opts.age; // Age. i.e. bounded by 18-100.
  const gender = _opts.gender || "f"; // Gender. Either 'm' or 'f'.
  const equation = _opts.type || "MSJE"; // Equation. 'MSJE' = Mifflin-St Jeor Equation, 'RHBE' = Revised Harris-Benedict Equation
  const roundedDown = _opts.roundedDown; // If the return value should be rounded down or left exact.

  // Conversion Rates.
  const LBS_TO_LG_CR = 0.45359237;
  const INCHES_TO_CM_CR = 2.54;
  const FEET_TO_INCHES_CR = 12;

  // Boundings.  Q: Any specific research on boundings?
  const MIN_AGE = 18;
  const MAX_AGE = 100;
  const MIN_WEIGHT = 1;
  const MIN_HEIGHT = 1;

  // Declarations
  let preparedInches = 0;
  let finalBMR = null;

  // Bad input check.
  if (
    (!bwKG && !bwLbs) ||
    (!bhCM && !bhFI) ||
    !age ||
    !gender ||
    age < MIN_AGE ||
    age > MAX_AGE ||
    !(gender === "f" || gender === "m")
  ) {
    return null;
  }

  // need to convert to KGs.
  if (!bwKG && bwLbs) {
    if (bwLbs < MIN_WEIGHT) {
      return null;
    }

    bwKG = bwLbs * LBS_TO_LG_CR;
    if (bwKG < MIN_WEIGHT) {
      return null;
    }
  }

  // need to convert to CMs.
  if (!bhCM && bhFI) {
    // Bad input check.
    // If missing feet, must be all inches. If missing inches, must be at least described in pure feet.
    // Therefore cannot be missing both.
    if (!bhFI.feet && !bhFI.inches) {
      return null;
    }

    if (bhFI.inches) {
      preparedInches += bhFI.inches;
    }

    if (bhFI.feet) {
      preparedInches += bhFI.feet * FEET_TO_INCHES_CR;
    }

    if (preparedInches < MIN_HEIGHT) {
      return null;
    }

    bhCM = preparedInches * INCHES_TO_CM_CR;
  }

  if (equation === "RHBE") {
    if (gender === "f") {
      // Female BMR = 9.247W + 3.098H - 4.330A + 447.593
      finalBMR = 9.247 * bwKG + 3.098 * bhCM - 4.33 * age + 447.593;
    } else {
      // Male BMR = 13.397W + 4.799H - 5.677A + 88.362
      finalBMR = 13.397 * bwKG + 4.799 * bhCM - 5.677 * age + 88.362;
    }
  } else {
    // Default: 'MSJE'.
    if (gender === "f") {
      // Female BMR = 10W + 6.25H - 5A - 161
      finalBMR = 10 * bwKG + 6.25 * bhCM - 5 * age - 161;
    } else {
      // Male BMR = 10W + 6.25H - 5A + 5
      finalBMR = 10 * bwKG + 6.25 * bhCM - 5 * age + 5;
    }
  }

  return roundedDown ? Math.floor(finalBMR) : finalBMR;
}
