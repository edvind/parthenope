module.exports = {
  posts: function (collectionApi) {
    const data = {};
    const meta = collectionApi.getAll()[0].data.meta;
    for (language in meta.languages) {
      const posts = collectionApi.getFilteredByGlob("./src/" + language + "/posts/*.md");
      for (const post of posts) {
        const langpost = data[language] || [];
        langpost.push( post );
        data[language] = langpost;
      }
    }
    return data;
  }
}
