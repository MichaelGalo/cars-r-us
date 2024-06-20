// import statements here
import { placeCarOrder } from "./transientState.js";

// create variable to grab the container element from the DOM
const mainContainer = document.querySelector("#container");
const colors = document.querySelector(".color-option");
const interiors = document.querySelector(".interior-option");
const technologies = document.querySelector(".technology-option");
const wheels = document.querySelector(".wheel-option");

// function to render the HTML for the application
const render = () => {
  return `
    <h1>Cars R Us</h1>
    <article class="choices">
      <section class="choices__colors options">
        <h2>Exterior Color</h2>

      </section>
      <section class="choices__interiors options">
        <h2>Interior</h2>

      </section>
      <section class="choices__technologies options">
        <h2>Technology Package</h2>

      </section>
      <section class="choices__wheels options">
        <h2>Wheels</h2>

      </section>
    </article>
     insert button here
    insert order list here
  `;
};

// invoke the render function to the variable selected from the main container in the DOM
mainContainer.innerHTML = render();

// button click event listener for a custom event set up in the transientState module
document.addEventListener("click", (event) => {
  if (event.target.id === "orderButton") {
    placeCarOrder();
  }
});
