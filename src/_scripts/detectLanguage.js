var locale =
[
  ...(window.navigator.languages || []),
  window.navigator.language,
  window.navigator.browserLanguage,
  window.navigator.userLanguage,
  window.navigator.systemLanguage
]
.filter(Boolean)
.map(language => language.substr(0, 2))
.find(language => availableLanguages.includes(language)) || "{{ page.lang }}";
let redirUrl = "{{ '/' | url | absoluteUrl( build.url ) }}" + locale + "/";
window.location.replace(redirUrl);
// This is prone to guess wrong. Better to redirect by Accept-Language header value server side.
