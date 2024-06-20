import { setWheels } from "./transientState.js";

// export function that will return the html for the wheel options from the database
export const Wheels = async () => {
  const response = await fetch("http://localhost:8088/wheels");
  const wheels = await response.json();

  let html = `<h2>Wheels</h2>
  <select class="choices" id="wheels-choices">`;

  html += `<option data-type="wheel" value="0" class="options">Choose Your Wheels</option>`;
  const wheelOptions = wheels
    .map((wheel) => {
      return `<option data-type="wheel" value="${wheel.id}" class="options">${wheel.name}</option>`;
    })
    .join("");

  html += wheelOptions;

  html += `</select>`;

  return html;
};

// create change event listener for the transient state changing due to the user selections
document.addEventListener("change", (event) => {
  if (event.target.dataset.type === "wheel") {
    setWheels(parseInt(event.target.value));
  }
});
