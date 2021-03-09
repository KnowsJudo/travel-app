/*-- Default data to pre-populate the form --*/

import { convertDateToBits } from "./date";

// Returns a set of default values based on Today
const getDefaults = () => {
  const dateNow = new Date();
  const today = convertDateToBits(dateNow);

  dateNow.setDate(dateNow.getDate() + 1);

  const tomorrow = convertDateToBits(dateNow);

  return {
    destination: "uluru",
    fromDate: `${today.year}-${today.month}-${today.date}`,
    toDate: `${tomorrow.year}-${tomorrow.month}-${tomorrow.date}`,
  };
};

export { getDefaults };
