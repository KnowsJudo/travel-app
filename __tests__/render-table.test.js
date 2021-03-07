import { renderForecast, renderTable } from "../src/client/js/render-table";

const forecastView = `<h4>Monday, 2021-05-31</h4>
<table class="weather-forecast-table">
<tbody><tr>
  <td>Maximum temperature:</td>
  <td>20.5</td>
</tr>
<tr>
  <td>Minimum temperature:</td>
  <td>11.8</td>
</tr>
<tr>
  <td>Weather forecast:</td>
  <td>Partly Cloudy</td>
</tr></tbody>
</table>
  <h4>Wednesday, 2021-06-30</h4>
<table class="weather-forecast-table">
<tbody><tr>
  <td>Maximum temperature:</td>
  <td>28.3</td>
</tr>
<tr>
  <td>Minimum temperature:</td>
  <td>22.1</td>
</tr>
<tr>
  <td>Weather forecast:</td>
  <td>Sunny</td>
</tr></tbody>
</table>
  `;

const tableView = `
<table class="weather-forecast-table">
<tbody><tr>
  <td>Maximum temperature:</td>
  <td>20.5</td>
</tr>
<tr>
  <td>Minimum temperature:</td>
  <td>11.8</td>
</tr>
<tr>
  <td>Weather forecast:</td>
  <td>Partly Cloudy</td>
</tr></tbody>
</table>
  `;

const forecast1 = {
  datetime: "2021-05-31",
  max_temp: 20.5,
  min_temp: 11.8,
  weather: {
    description: "Partly Cloudy",
  },
};

const forecast2 = {
  datetime: "2021-06-30",
  max_temp: 28.3,
  min_temp: 22.1,
  weather: {
    description: "Sunny",
  },
};

describe("Validate Forecast Rendering", () => {
  test("Forecast View Generated", () => {
    const forecastResult = renderForecast([forecast1, forecast2], 0);
    expect(forecastResult).toEqual(forecastView);
  });
});

describe("Validate Table Rendering", () => {
  test("Basic Table Generated", () => {
    const tableResult = renderTable(forecast1);

    expect(tableResult).toEqual(tableView);
  });
});
