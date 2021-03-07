/*-- API for fetching Image Data --*/

import noResult from "../media/No-image.jpg";

const pixKey = "20565881-4cae4a3adb7f1a2a3051d110d";
const pixURL = "pixabay.com/api/";

// Sends a query to Pixabay and returns the Image Path
const getImage = async (query) => {
  let imagePath = "";

  try {
    //Replace spaces with +
    const cleanString = query.replace(/\s/g, "+");
    const response = await fetch(
      `https://${pixURL}?key=${pixKey}&q=${cleanString}&image_type=photo`
    );
    const imageData = await response.json();

    if (imageData.hits.length < 1) {
      imagePath = noResult;
      throw "No images returned";
    }

    imagePath = imageData.hits[0].webformatURL;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("a get error occured", error);
  }

  return imagePath;
};

export { getImage };
