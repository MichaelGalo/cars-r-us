//create interior module using wheel.js as a template
import { setInteriors } from "./transientState.js";

// export function that will return the html for the interior options from the database
export const Interiors = async () => {
  const response = await fetch("http://localhost:8088/interior");
  const interiors = await response.json();

  let html = `<select class="choices" id="interiors-choices">`;

  html += `<option data-type="interior" value="0" class="options">Choose Your Interior</option>`;
  const interiorOptions = interiors
    .map((interior) => {
      return `<option data-type="interior" value="${interior.id}" class="options">${interior.name}</option>`;
    })
    .join("");

  html += interiorOptions;

  html += `</select>`;

  return html;
};

// create function for when user chooses interior
const userChosenInterior = (changeEvent) => {
  if (changeEvent.target.id === "interiors-choices") {
    setInteriors(parseInt(changeEvent.target.value));
  }
};

// create change event listener for the transient state changing due to the user selections
document.addEventListener("change", userChosenInterior);
