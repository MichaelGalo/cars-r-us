//create model module using wheel.js as a template
import { setModels } from "./transientState.js";

// export function that will return the html for the model options from the database
export const Models = async () => {
  const response = await fetch("http://localhost:8088/models");
  const models = await response.json();

  let html = `<h2>Models</h2>
  <select class="choices" id="models-choices">`;

  html += `<option data-type="model" value="0" class="options">Choose Your Model</option>`;
  const modelOptions = models
    .map((model) => {
      return `<option data-type="model" value="${model.id}" class="options">${model.name}</option>`;
    })
    .join("");

  html += modelOptions;

  html += `</select>`;

  return html;
};

// create function for when user chooses models
const userChosenModels = (changeEvent) => {
  if (changeEvent.target.id === "models-choices") {
    setModels(parseInt(changeEvent.target.value));
  }
};

// create change event listener for the transient state changing due to the user selections
document.addEventListener("change", userChosenModels);
