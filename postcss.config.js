let postCssConfig = {
  plugins: [
    require('postcss-normalize'),
    require('autoprefixer')
  ]
};

if (process.env.ELEVENTY_ENV == "production" ||
    process.env.ELEVENTY_ENV == "staging") {
  postCssConfig.plugins.push(
    require('cssnano')
  );
}

module.exports = postCssConfig;
