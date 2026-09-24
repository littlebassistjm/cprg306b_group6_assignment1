import { createConverter } from "./converter.js";

// Get Weight HTML elements
const weightConversion = document.getElementById(
  "weight-conversion",
) as HTMLSelectElement;

const weightSingleInput = document.getElementById(
  "weight-single-input",
) as HTMLInputElement;

const weightSingleButton = document.getElementById(
  "weight-single-button",
) as HTMLButtonElement;

const weightArrayInput = document.getElementById(
  "weight-array-input",
) as HTMLInputElement;

const weightArrayButton = document.getElementById(
  "weight-array-button",
) as HTMLButtonElement;

const weightResult = document.getElementById("weight-result") as HTMLDivElement;

// Get Distance HTML elements

// Get Temperature HTML elements

// Helper function that determines which converter to use

function getConverter(conversionType: string) {
  switch (conversionType) {
    // Weight
    case "poundsToKilograms":
      return createConverter("pounds", "kilograms");
    case "kilogramsToPounds":
      return createConverter("kilograms", "pounds");

    // Distance

    // Temperature

    default:
      throw new Error(`Conversion type "${conversionType}" doesn't exist`);
  }
}

// WEIGHT CONVERSIONS
// Single Value (Weight)
weightSingleButton.addEventListener("click", () => {
  const weightInputValue = Number(weightSingleInput.value);

  const converter = getConverter(weightConversion.value);

  const result = converter(weightInputValue);

  weightResult.textContent = result.toFixed(2);
});

// Array Conversion (Weight)
weightArrayButton.addEventListener("click", () => {
  const conversionType = weightConversion.value;

  const weightValues = weightArrayInput.value
    .split(",")
    .map((weightValue) => Number(weightValue.trim()));

  const converter = getConverter(weightConversion.value);

  const weightResultValues = weightValues.map((weightValue) =>
    converter(weightValue),
  );

  weightResult.textContent = weightResultValues
    .map((weightValue) => weightValue.toFixed(2))
    .join(", ");
});
