/*-- Setters and Getters for all UI elements --*/

// Sets the image of the location searched
const displayImage = (src) => {
  const imageContainer = document.getElementById("image");
  if (!src) {
    imageContainer.innerHTML = "";
  } else {
    imageContainer.innerHTML = `<img src="${src}" />`;
  }
};

// Sets the content to be displayed (Loading / Table of Forecasts)
const displayInfo = (info) => {
  const infoContainer = document.getElementById("info");
  infoContainer.innerHTML = info;
};

// Returns the values in the form
const getValues = () => {
  const destination = document.getElementById("destination");
  const fromDate = document.getElementById("from-date");
  const toDate = document.getElementById("to-date");
  if (destination === null || fromDate === null || toDate === null) {
    throw "Could not get all form elements";
  }

  return {
    destination: destination.value,
    fromDate: fromDate.value,
    toDate: toDate.value,
  };
};

// Registers the event listener for the Submit Button
const registerSubmit = (onSubmit) => {
  const submit = document.getElementById("submit");
  submit.addEventListener("click", onSubmit);
};

// Registers the event listener for the Reset Button
const registerReset = (onReset) => {
  const clear = document.getElementById("clear");
  clear.addEventListener("click", onReset);
};

// Sets the values in the form
const setValues = (next) => {
  const destination = document.getElementById("destination");
  const fromDate = document.getElementById("from-date");
  const toDate = document.getElementById("to-date");
  if (destination === null || fromDate === null || toDate === null) {
    throw "Could not set all form elements";
  }

  destination.value = next.destination;
  fromDate.value = next.fromDate;
  toDate.value = next.toDate;
};

export {
  displayImage,
  displayInfo,
  getValues,
  registerSubmit,
  registerReset,
  setValues,
};
