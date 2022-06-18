const
  htmlminifier = require('html-minifier'),
  htmlprettify = require('html-prettify');

module.exports = {
  prettify: function (content) {
    if (this.outputPath) {
      if (
        this.outputPath.endsWith(".html") &&
        process.env.ELEVENTY_ENV === "development") {
        return htmlprettify(content);
      } else if (
        this.outputPath.endsWith(".xml")) {
        return htmlprettify(content);
      }
    }
    return content;
  },
  minify: function (content) {
    if (this.outputPath) {
      if (
        this.outputPath.endsWith(".html") &&
        process.env.ELEVENTY_ENV === "production") {
        return htmlminifier.minify(content, {
          useShortDoctype: true,
          removeComments: true,
          collapseWhitespace: true
        });
      }
    }
    return content;
  }
}
