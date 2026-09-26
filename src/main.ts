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
const distanceConversion = document.getElementById(
  "distance-conversion",
) as HTMLSelectElement;

const distanceSingleInput = document.getElementById(
  "distance-single-input",
) as HTMLInputElement;

const distanceSingleButton = document.getElementById(
  "distance-single-button",
) as HTMLButtonElement;

const distanceArrayInput = document.getElementById(
  "distance-array-input",
) as HTMLInputElement;

const distanceArrayButton = document.getElementById(
  "distance-array-button",
) as HTMLButtonElement;

const distanceResult = document.getElementById("distance-result") as HTMLDivElement;

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
    case "milesToKilometers":
      return createConverter("miles", "kilometers");
    case "kilometersToMiles":
      return createConverter("kilometers", "miles");

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

// DISTANCE CONVERSIONS
// Single Value (Distance)
distanceSingleButton.addEventListener("click", () => {
  const distanceInputValue = Number(distanceSingleInput.value);

  const converter = getConverter(distanceConversion.value);

  const result = converter(distanceInputValue);

  distanceResult.textContent = result.toFixed(2);
});

// Array Conversion (Distance)
distanceArrayButton.addEventListener("click", () => {
  const conversionType = distanceConversion.value;

  const distanceValues = distanceArrayInput.value
    .split(",")
    .map((distanceValue) => Number(distanceValue.trim()));

  const converter = getConverter(distanceConversion.value);

  const distanceResultValues = distanceValues.map((distanceValue) =>
    converter(distanceValue),
  );

  distanceResult.textContent = distanceResultValues
    .map((distanceValue) => distanceValue.toFixed(2))
    .join(", ");
});

// Added hidden tab functionality
const weightTab = document.getElementById("weight-tab");
const distanceTab = document.getElementById("distance-tab");
const temperatureTab = document.getElementById("temperature-tab");

const weightSection = document.getElementById("weight-section");
const distanceSection = document.getElementById("distance-section");
const temperatureSection = document.getElementById("temperature-section");

if (
    weightTab &&
    distanceTab &&
    temperatureTab &&
    weightSection &&
    distanceSection &&
    temperatureSection
){
  weightTab.addEventListener("click", () => {
    weightSection.classList.remove("hidden");
    distanceSection.classList.add("hidden");
    temperatureSection.classList.add("hidden");
  });

  distanceTab.addEventListener("click", () => {
      weightSection.classList.add("hidden");
      distanceSection.classList.remove("hidden");
      temperatureSection.classList.add("hidden");
  });

  temperatureTab.addEventListener("click", () => {
      weightSection.classList.add("hidden");
      distanceSection.classList.add("hidden");
      temperatureSection.classList.remove("hidden");
  });
}
