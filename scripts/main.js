// import statements here
import { Interiors } from "./interior.js";
import { Orders } from "./orders.js";
import { Colors } from "./paints.js";
import { orderButton } from "./placeButtonComponent.js";
import { Technologies } from "./technologies.js";
import { placeCarOrder } from "./transientState.js";
import { Wheels } from "./wheels.js";

// create variable to grab the container element from the DOM
const mainContainer = document.querySelector("#container");

// function to render the HTML for the application
const render = async () => {
  const wheelsHTML = await Wheels();
  const colorsHTML = await Colors();
  const interiorsHTML = await Interiors();
  const technologiesHTML = await Technologies();
  const orderButtonHTML = orderButton();
  const ordersHTML = await Orders();

  const appHTML = `
    <h1>Cars R Us</h1>
    <article class="choices">
      <section class="choices-colors options">
        <h2>Exterior Color</h2>
        ${colorsHTML}
      </section>
      <section class="choices-interiors options">
        <h2>Interior Color</h2>
        ${interiorsHTML}
      </section>
      <section class="choices-technologies options">
        <h2>Technology Package</h2>
        ${technologiesHTML}
      </section>
      <section class="choices-wheels options">
        ${wheelsHTML}
      </section>
    </article>
     ${orderButtonHTML}
    ${ordersHTML}
  `;

  mainContainer.innerHTML = appHTML;
};

render();

// button click event listener for a custom event set up in the transientState module
document.addEventListener("carOrderPlaced", (event) => {
  console.log("State of data has changed. Regenerating HTML...");
  render();
});
