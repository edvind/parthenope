module.exports = {
  posts: function (collectionApi) {
    const data = {};
    const languages = collectionApi.getAll()[0].data.languages;
    for (language in languages) {
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
