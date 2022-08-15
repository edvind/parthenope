// @11ty/eleventy-plugin-rss supplied nunjucks filters
//
// getNewestCollectionItemDate
// dateToRfc3339      2022-06-18T07:20:50.52Z
// dateToRfc822       Sat, 18 Jun 2022 09:20:50 CEST
// absoluteUrl 
// htmlToAbsoluteUrls

const { DateTime } = require("luxon");

module.exports = {
  date: function (date, lang) {
    return DateTime
    .fromObject(date)
    .setLocale(lang)
    .toLocaleString(DateTime.DATE_MED);
  }
}
