module.exports = {
  posts_en: function (collectionApi) {
    return collectionApi.getFilteredByGlob("./src/en/posts/*.md");
  },
  posts_sv: function (collectionApi) {
    return collectionApi.getFilteredByGlob("./src/sv/posts/*.md");
  }
}
