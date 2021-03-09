/*-- Function to fetch and process all Forecast requests --*/

import { getCoords } from "./coords";
import { calculateDateDifference } from "./date";
import { getImage } from "./image";
import { renderForecast } from "./render-table";
import { getWeather } from "./weather";

// Parse in geolocation coords
const getLocationAndWeather = async (values) => {
  let info = "";
  let image = "";
  let tripLength = "";

  try {
    const coords = await getCoords(values.destination);
    const totalDays = calculateDateDifference(values.toDate);
    const diffDays = calculateDateDifference(values.toDate, values.fromDate);

    const result = await getWeather({
      days: totalDays + 1,
      lat: coords.lat,
      long: coords.long,
    });

    const forecast = await result.json();

    if (forecast.data && forecast.data) {
      info = renderForecast(forecast.data, totalDays - diffDays);
      image = await getImage(values.destination);
      tripLength = diffDays + 1;
    }
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
