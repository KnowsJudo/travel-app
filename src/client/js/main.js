/*-- Main file to register event handlers and prepare page --*/

import loader from "../media/loader.gif";
import { getDefaults } from "./defaults";
import { getLocationAndWeather } from "./form";
import {
  displayInfo,
  displayImage,
  getValues,
  registerReset,
  registerSubmit,
  setValues,
} from "./html";

// Reset the UI
const onReset = async () => {
  displayInfo("");
  displayImage("");
  setValues({
    destination: "",
    fromDate: "",
    toDate: "",
  });
};

//Loads everything into the UI
const onSubmit = async () => {
  const values = getValues();

  displayInfo("loading...");
  displayImage(loader);

  const result = await getLocationAndWeather(values);

  displayInfo(result.info);
  displayImage(result.image);
};

// Add event listeners to Button Elements
registerSubmit(onSubmit);
registerReset(onReset);

// Pre-fill some default information into the fields
setTimeout(() => setValues(getDefaults()), 100);
