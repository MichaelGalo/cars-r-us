// create transientState object that reflects the option in the database.json
const transientState = {
  colorId: 0,
  interiorId: 0,
  technologyId: 0,
  wheelId: 0,
};

// create functions to modify each property of transient state
export const setExteriorColor = (id) => {
  transientState.colorId = id;
  console.log(transientState);
};

export const setInterior = (id) => {
  transientState.interiorId = id;
  console.log(transientState);
};

export const setTechnology = (id) => {
  transientState.technologyId = id;
  console.log(transientState);
};

export const setWheels = (id) => {
  transientState.wheelId = id;
  console.log(transientState);
};

// function that turns transient state into permanent state
export const placeCarOrder = async () => {
  // create a postOptions object
  const postOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(transientState),
  };

  // Send the transient state to your API // make the request
  const response = await fetch(
    "http://localhost:8088/customOrders",
    postOptions
  );

  // create a custom event to broadcast & refresh the page with the updated html
  const customEvent = new CustomEvent("carOrderPlaced");
  document.dispatchEvent(customEvent);
};
