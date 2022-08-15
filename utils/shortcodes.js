const
  dotenv = require('dotenv').config(),
  Image = require("@11ty/eleventy-img");

module.exports = {
  image: async function (src, alt, sizes = "100vw" ) {

    let cacheDuration = process.env.CACHE_IMG || "1d";

    let metadata = await Image(src, {
      widths: [1200],
      formats: ["avif", "webp", "jpeg"],
      outputDir: "./dist/images/",
      urlPath: "/images/",
      cacheOptions: {
        duration: cacheDuration
      }
    });
  
    let imageAttributes = {
      alt,
      sizes,
      loading: "lazy",
      decoding: "async",
    };

    return Image.generateHTML(metadata, imageAttributes);
  }
}
