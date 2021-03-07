/*-- Generate the views to display forecast information --*/

import { toDayName } from "./date";

// Goes through each forecast to generate a table
const renderForecast = (forecast, from) => {
  let tableData = "";

  for (var i = from; i < forecast.length; i++) {
    const day = toDayName(new Date(forecast[i].datetime).getDay());
    tableData = `${tableData}<h4>${day}, ${
      forecast[i].datetime
    }</h4>${renderTable(forecast[i])}`;
  }

  return tableData;
};

// Generates the HTML for the table of a single day's forecast
const renderTable = (dayForecast) => `
<table class="weather-forecast-table">
<tbody><tr>
  <td>Maximum temperature:</td>
  <td>${dayForecast.max_temp}</td>
</tr>
<tr>
  <td>Minimum temperature:</td>
  <td>${dayForecast.min_temp}</td>
</tr>
<tr>
  <td>Weather forecast:</td>
  <td>${dayForecast.weather.description}</td>
</tr></tbody>
</table>
  `;

export { renderForecast, renderTable };
