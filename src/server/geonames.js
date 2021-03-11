const request = require("request");

const geoUser = process.env.GEO_KEY;
const geoBaseURL = "api.geonames.org";

//Get request to fetch geolocation coordinates
const getCoords = (destination) => {
  const url = `http://${geoBaseURL}/searchJSON?q=${destination}&maxRows=10&username=${geoUser}`;

  return new Promise((resolve, reject) =>
    request({ url }, (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return reject(error && error.message);
      }

      const result = JSON.parse(body);

      if (result.geonames && result.geonames.length < 1) {
        return reject(`No locations matched with ${destination}`);
      }

      resolve({
        lat: result.geonames[0].lat,
        long: result.geonames[0].lng,
      });
    })
  );
};

module.exports = { getCoords };
