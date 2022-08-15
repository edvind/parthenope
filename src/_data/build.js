const dotenv = require('dotenv').config();

function buildUrl( env ) {
  let buildUrl;
  if ( env == "production" ) {
    buildUrl = process.env.PRODUCTION_URL;
  } else if ( env == "development" ) {
    buildUrl = process.env.DEVELOPMENT_URL;
  } else if ( env == "staging" ) {
    buildUrl = process.env.STAGING_URL;
  }
  return buildUrl || "http://localhost:8080";
}

module.exports = {
  env: process.env.ELEVENTY_ENV,
  lang: process.env.DEFAULT_LANG || "en",
  timestamp: new Date(),
  url: buildUrl( process.env.ELEVENTY_ENV )
}
