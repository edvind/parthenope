const
  filters = require('./utils/filters.js'),
  transforms = require('./utils/transforms.js'),
  shortcodes = require('./utils/shortcodes.js');

module.exports = function(eleventyConfig) {

  // Filters
  Object.keys(filters).forEach((filterName) => {
    eleventyConfig.addFilter(filterName, filters[filterName])
  })
  
  // Shortcodes
  Object.keys(shortcodes).forEach((shortcodeName) => {
    eleventyConfig.addShortcode(shortcodeName, shortcodes[shortcodeName])
  })

  // Transforms
  Object.keys(transforms).forEach((transformName) => {
    eleventyConfig.addTransform(transformName, transforms[transformName])
  })

  // Aliases
  eleventyConfig.addLayoutAlias('base', 'base.njk')

  // Browsersync https://browsersync.io/docs/options/
  eleventyConfig.setBrowserSyncConfig({
    files: './dist/styles.css',
    ui: { port: 3001 },
    ghostMode: true
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
