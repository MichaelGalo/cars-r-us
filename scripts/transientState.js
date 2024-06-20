// create transientState object that reflects the option in the database.json
const transientState = {
  colorId: 0,
  interiorId: 0,
  technologyId: 0,
  wheelId: 0,
};

// create functions to modify each property of transient state
export const setWheels = (changedWheels) => {
  transientState.wheelId = changedWheels;
  console.log(parseInt(transientState));
};

export const setColors = (changedColors) => {
  transientState.colorId = changedColors;
  console.log(parseInt(transientState));
};

export const setInteriors = (changedInteriors) => {
  transientState.interiorId = changedInteriors;
  console.log(parseInt(transientState));
};

export const setTechnologies = (changedTechnologies) => {
  transientState.technologyId = changedTechnologies;
  console.log(parseInt(transientState));
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
  const response = await fetch("http://localhost:8088/orders", postOptions);

  // create a custom event to broadcast & refresh the page with the updated html
  const customEvent = new CustomEvent("carOrderPlaced");
  document.dispatchEvent(customEvent);
};
