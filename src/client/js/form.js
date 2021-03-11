/*-- Function to fetch and process all Forecast requests --*/
import noResult from "../media/No-image.jpg";

import { calculateDateDifference } from "./date";
import { renderForecast } from "./render-table";
import { getData } from "./finalData";

// Parse in geolocation coords
const getLocationAndWeather = async (values) => {
  let info = "";
  let image = "";
  let tripLength = "";

  try {
    const totalDays = calculateDateDifference(values.toDate);
    const diffDays = calculateDateDifference(values.toDate, values.fromDate);

    const result = await getData({
      days: totalDays + 1,
      dest: values.destination,
    });

    const data = await result.json();

    info = renderForecast(data.forecast, totalDays - diffDays);
    image = data.image || noResult;
    tripLength = diffDays + 1;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Error processing requests", error);
  }

  return {
    info,
    image,
    tripLength,
  };
};

export { getLocationAndWeather };
