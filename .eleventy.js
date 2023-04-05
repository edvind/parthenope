const
  collections = require('./utils/collections.js'),
  filters = require('./utils/filters.js'),
  filtersAsync = require('./utils/filters-async.js'),
  shortcodes = require('./utils/shortcodes.js'),
  transforms = require('./utils/transforms.js');

const
  eleventyI18n = require("@11ty/eleventy").EleventyI18nPlugin,
  eleventyNavigation = require("@11ty/eleventy-navigation"),
  eleventyRss = require("@11ty/eleventy-plugin-rss");

const dotenv = require('dotenv').config();

module.exports = function(eleventyConfig) {

  let defaultLanguage = process.env.DEFAULT_LANG || "en";

  // Plugins
  eleventyConfig.addPlugin(eleventyI18n, { defaultLanguage: defaultLanguage });
  eleventyConfig.addPlugin(eleventyNavigation);
  eleventyConfig.addPlugin(eleventyRss);

  // Collections
  Object.keys(collections).forEach((collectionName) => {
    eleventyConfig.addCollection(collectionName, collections[collectionName])
  });

  // Filters
  Object.keys(filters).forEach((filterName) => {
    eleventyConfig.addFilter(filterName, filters[filterName])
  });

  // Filters (Asynchronous)
  Object.keys(filtersAsync).forEach((filterAsyncName) => {
    eleventyConfig.addNunjucksAsyncFilter(filterAsyncName, filtersAsync[filterAsyncName])
  });

  // Shortcodes
  Object.keys(shortcodes).forEach((shortcodeName) => {
    eleventyConfig.addShortcode(shortcodeName, shortcodes[shortcodeName])
  });

  // Transforms
  Object.keys(transforms).forEach((transformName) => {
    eleventyConfig.addTransform(transformName, transforms[transformName])
  });

  // Passthrough
  eleventyConfig.addPassthroughCopy({ "src/_assets/favicons": "." });

  // Watch Targets
  eleventyConfig.addWatchTarget("./src/_scripts/");

  // Swap 11ty dev server to browsersync
  eleventyConfig.setServerOptions({
    liveReload: true,
    domDiff: true,
    watch: ["dist/styles.css"]
  });

  // Defaults
  return {
    templateFormats: [
      "njk",
      "md"
    ],
    dir: {
      input: "src",
      output: "dist",
      data: "_data",
      includes: "_includes",
      layouts: "_layouts"
    }
  }
}
