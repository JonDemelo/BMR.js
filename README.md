# BMR.js

ES6 JS utility function for calculating Basal Metabolic Rate (BMR).

https://en.wikipedia.org/wiki/Basal_metabolic_rate

## Inputs

For assigned 'Paired Values', one of the pair must be provided.

| Parameter | Defaults | Paired Values | Description | Type | Example 
| - | - | - | - | - | - |
| bwKG | | * |Body weight in KGs. | Number | 77.11 |
| bwLbs | | * |Body weight in Lbs. | Number | 170 |
| bhCM | | # |Body height in CM. | Number | 180 |
| bhFI | | # |Body height in Feet/inches. | Object | {feet: f, inches: i} ex. {feet: 5, inches: 11} |
| age | | | Age, bounded by 18-100. | Number | 30 |
| gender | 'f' | |Gender. Either 'm' or 'f'. | String | 'm' |
| equation | 'MSJE' | | BMR Equation used. 'MSJE' = Mifflin-St Jeor Equation, 'RHBE' = Revised Harris-Benedict Equation | String | 'RHBE' |
| roundedDown | false | | If the result should be rounded down or left exact | boolean | true |

## Output

The calculated BMR value, or `Null` if malformed input. 

## Example Usage

`import BMR from "./BMR.js"; // Be sure to setup your package.json`

`const bmr = BMR({
  bwLbs: 170,
  bhFI: { feet: 5, inches: 11 },
  age: 20,
  gender: "m",
  roundedDown: true,
});`

`console.log(bmr); // 1803`