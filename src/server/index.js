// Imports
require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const request = require("request");

// Constants
const app = express();
const weatherKey = "c6966319093248f49e05c88a25469d45";
const weatherURL = "api.weatherbit.io/v2.0";

// Add Middleware
app.use(bodyParser.json());
app.use(express.static("dist"));

// Fetch forecast based on a LAT and LONG, and a number of days
app.post("/get-weather", (req, res) => {
  const days = req.body.days;
  const lat = req.body.lat;
  const long = req.body.long;

  const url = `https://${weatherURL}/forecast/daily?days=${days}&lat=${lat}&lon=${long}&key=${weatherKey}`;

  request({ url }, (error, response, body) => {
    if (error || response.statusCode !== 200) {
      return res
        .status(500)
        .json({ type: "error", message: error && error.message });
    }

    res.json(JSON.parse(body));
  });
});

// Open server up to Port 8080
app.listen(8080, () => {
  // eslint-disable-next-line no-console
  console.log("Travel app spinning up on port 8080!");
});
