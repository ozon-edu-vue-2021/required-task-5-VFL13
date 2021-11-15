import "setimmediate";
const GoogleImages = require("google-images");
// const imageFinder = require("yandex-pictures")

const imageFinder = new GoogleImages(
  process.env.VUE_APP_CSE_ID,
  process.env.VUE_APP_API_KEY
);

export default imageFinder;
