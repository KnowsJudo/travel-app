// Imports
require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const { getCoords } = require("./geonames");
const { getImage } = require("./pixabay");
const { getWeather } = require("./weatherbit");

// Constants
const app = express();

// Add Middleware
app.use(bodyParser.json());
app.use(express.static("dist"));

app.post("/get-data", async (req, res) => {
  //Store destination and days data
  const dest = req.body.dest;
  const days = req.body.days;

  //Create final data object to send to client
  try {
    const coords = await getCoords(dest);
    const forecast = await getWeather(days, coords.lat, coords.long);
    const image = await getImage(dest);

    res.json({ forecast, image });
  } catch (error) {
    res.send(error);
  }
});

// Open server up to Port 8080
app.listen(8080, () => {
  // eslint-disable-next-line no-console
  console.log("Travel app spinning up on port 8080!");
});

module.exports = app;
