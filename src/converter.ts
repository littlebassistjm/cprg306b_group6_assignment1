const conversions: Record<string, (inputValue: number) => number> = {
  // Weight
  //poundsToKilograms:
  //kilogramsToPounds:

  // Distance
  //milesToKilometers:
  //kilometersToMiles:

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
