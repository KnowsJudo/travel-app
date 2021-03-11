/*-- Generate the views to display forecast information --*/

import { toDayName } from "./date";

// Goes through each forecast to generate a table
const renderForecast = (forecast, from) => {
  let tableData = "";

  for (var i = from; i < forecast.length; i++) {
    if (forecast[i]) {
      const day = toDayName(new Date(forecast[i].date).getDay());
      tableData = `${tableData}<h4>${day}, ${
        forecast[i].date
      }</h4>${renderTable(forecast[i])}`;
    } else {
      // eslint-disable-next-line no-console
      console.log(
        `tried to read index[${i}] of forecast but could not find data`
      );
    }
  }

  return tableData;
};

// Generates the HTML for the table of a single day's forecast
const renderTable = (dayForecast) => `
<table class="weather-forecast-table">
<tbody><tr>
  <td>Maximum temperature:</td>
  <td>${dayForecast.maxTemp}</td>
</tr>
<tr>
  <td>Minimum temperature:</td>
  <td>${dayForecast.minTemp}</td>
</tr>
<tr>
  <td>Weather forecast:</td>
  <td>${dayForecast.weather}</td>
</tr></tbody>
</table>
  `;

export { renderForecast, renderTable };
