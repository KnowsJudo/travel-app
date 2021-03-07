/*-- API for fetching Co-Ordinate Data --*/

// Constants
const geoUser = "knowsjudo";
const geoBaseURL = "api.geonames.org";

//Get request to fetch geolocation coordinates
const getCoords = async (locationName) => {
  let location = {
    country: "",
    lat: 0,
    long: 0,
  };

  try {
    const response = await fetch(
      `http://${geoBaseURL}/searchJSON?q=${locationName}&maxRows=10&username=${geoUser}`
    );

    const coordData = await response.json();

    location = {
      country: coordData.geonames[0].countryCode,
      lat: coordData.geonames[0].lat,
      long: coordData.geonames[0].lng,
    };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("a get error occured", error);
  }

  return location;
};

export { getCoords };
