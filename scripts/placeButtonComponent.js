import { placeCarOrder } from "./transientState.js";

export const orderButton = () => {
  return `<button id="orderButton">Create Custom Order</button>`;
};

document.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "orderButton") {
    placeCarOrder();
  }
});
