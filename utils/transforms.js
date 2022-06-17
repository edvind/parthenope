const
  htmlminifier = require('html-minifier'),
  htmlprettify = require('html-prettify'),
  prettier = require("prettier");

module.exports = {
  prettify: function (content) {
    if (
      this.outputPath &&
      this.outputPath.endsWith(".html") &&
      process.env.ELEVENTY_ENV === "development") {
      return htmlprettify(content);
    }
    return content;
  },
  minify: function (content) {
    if (
      this.outputPath &&
      this.outputPath.endsWith(".html") &&
      process.env.ELEVENTY_ENV === "production") {
      return htmlminifier.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
    }
    return content;
  }
}
