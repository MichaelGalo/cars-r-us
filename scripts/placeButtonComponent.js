import { placeCarOrder } from "./transientState.js";

export const orderButton = () => {
  document.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "orderButton") {
      placeCarOrder();
    }
  });

  return `<button id="orderButton">Create Custom Order</button>`;
};
