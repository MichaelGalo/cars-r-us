//create paints module using wheel.js as a template
import { setColors } from "./transientState.js";

// export function that will return the html for the paint options from the database
export const Colors = async () => {
  const response = await fetch("http://localhost:8088/colors");
  const paints = await response.json();

  let html = `<select class="choices" id="paints-choices">`;

  html += `<option data-type="paint" value="0" class="options">Choose Your Paint</option>`;
  const paintOptions = paints
    .map((paint) => {
      return `<option data-type="paint" value="${paint.id}" class="options">${paint.name}</option>`;
    })
    .join("");

  html += paintOptions;

  html += `</select>`;

  return html;
};

// create function for when user chooses colors
const userChosenColors = (changeEvent) => {
  if (changeEvent.target.id === "paints-choices") {
    setColors(parseInt(changeEvent.target.value));
  }
};

// create change event listener for the transient state changing due to the user selections
document.addEventListener("change", userChosenColors);
