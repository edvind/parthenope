const { minify } = require("terser");

module.exports = {
  jsMinify: async function (code, callback) {
    if (process.env.ELEVENTY_ENV == 'production') {
      try {
        const minified = await minify(code);
        callback(null, minified.code);
      }
      catch (err) {
        console.error("Terser error: ", err);
        callback(null, code);
      }
    }
  }
}
