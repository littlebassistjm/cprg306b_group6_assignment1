const conversions: Record<string, (inputValue: number) => number> = {
  // Weight
  //poundsToKilograms:
  //kilogramsToPounds:
  poundsToKilograms: (inputValue: number) => inputValue * 0.453592,
  kilogramsToPounds: (inputValue: number) => inputValue * 2.20462,

  // Distance
  //milesToKilometers:
  milesToKilometers: (inputValue: number) => inputValue * 1.60934,
  //kilometersToMiles:
  kilometersToMiles: (inputValue: number) => inputValue * 0.621371,

  // Temperature
  //celsiusToFahrenheit:
  //fahrenheitToCelsius:
};

export function createConverter(fromUnit: string, toUnit: string) {
  // create key
  // if parameters are "pounds" and "kilograms," this key constant becomes "poundsToKilograms"
  const key =
    fromUnit + "To" + toUnit.charAt(0).toUpperCase() + toUnit.slice(1);

    // determine which formula to use based on the created key
    const conversionFunction = conversions[key];

    // check if key is valid & formula exists, else throw an error
    if(!conversionFunction){
        throw new Error(
            `Conversion "${key}" does not exist`
        );
    }

    return (inputValue: number): number => conversionFunction(inputValue);
}
