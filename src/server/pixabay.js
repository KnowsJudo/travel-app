const request = require("request");

const pixKey = process.env.PIX_KEY;
const pixURL = "pixabay.com/api/";

const getImage = (dest) => {
  const cleanString = dest.replace(/\s/g, "+");
  const url = `https://${pixURL}?key=${pixKey}&q=${cleanString}&image_type=photo`;
  let result = "";

  try {
    result = new Promise((res, rej) => {
      request({ url }, async (error, response, body) => {
        if (error || response.statusCode !== 200) {
          rej(error && error.message);
        }
        let data = JSON.parse(body);
        if (data.hits.length >= 1) {
          data = data.hits[0].webformatURL;
        } else {
          rej("No results found");
        }
        res(data);
      });
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log("A get image error occurred", error);
  }
  return result;
};

module.exports = { getImage };
