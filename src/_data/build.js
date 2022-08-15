const dotenv = require('dotenv').config();

module.exports = {
  env: process.env.ELEVENTY_ENV,
  lang: process.env.DEFAULT_LANG || "en",
  timestamp: new Date(),
  url: process.env.URL || "http://localhost:8080"
}
