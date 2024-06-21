//create technology module using wheel.js as a template
import { setTechnologies } from "./transientState.js";

// export function that will return the html for the technology options from the database
export const Technologies = async () => {
  const response = await fetch("http://localhost:8088/technologies");
  const technologies = await response.json();

  let html = `<select class="choices" id="technology-choices">`;

  html += `<option data-type="technology" value="0" class="options">Choose Your Technology</option>`;
  const technologyOptions = technologies
    .map((technology) => {
      return `<option data-type="technology" value="${technology.id}" class="options">${technology.name}</option>`;
    })
    .join("");

  html += technologyOptions;

  html += `</select>`;

  return html;
};

// create function for when user chooses technology
const userChosenTechnology = (changeEvent) => {
  if (changeEvent.target.id === "technology-choices") {
    setTechnologies(parseInt(changeEvent.target.value));
  }
};

// create change event listener for the transient state changing due to the user selections
document.addEventListener("change", userChosenTechnology);
