const request = require("request");

const weatherKey = process.env.WEATHER_KEY;
const weatherURL = "api.weatherbit.io/v2.0";

// Fetch forecast based on a LAT and LONG, and a number of days
const getWeather = (days, lat, long) => {
  const url = `https://${weatherURL}/forecast/daily?days=${days}&lat=${lat}&lon=${long}&key=${weatherKey}`;

  return new Promise((resolve, reject) =>
    request(url, (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return reject(error && error.message);
      }

      const result = JSON.parse(body);

      if (result.data && result.data.length < 1) {
        return reject("No results found");
      }

      let forecast = [];

      // Push the key values from res into forecast array
      for (var i = 0; i < result.data.length; i++) {
        forecast.push({
          date: result.data[i].datetime,
          maxTemp: result.data[i].max_temp,
          minTemp: result.data[i].min_temp,
          weather: result.data[i].weather.description,
        });
      }

      resolve(forecast);
    })
  );
};

module.exports = { getWeather };
