if (process.env.ELEVENTY_ENV == "development") {
  module.exports = {
    plugins: [
      require('postcss-normalize'),
      require('autoprefixer')
    ]
  }
} else {
  module.exports = {
    plugins: [
      require('postcss-normalize'),
      require('autoprefixer'),
      require('cssnano')
    ]
  }
}
