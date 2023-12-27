const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const fg = require('fast-glob');
const path = require('path');

const documentPaths = fg.sync(['**/media/documents/*', '!**/_site']);

const documents = []
for (documentPath of documentPaths) {
  documents.push({ path: documentPath, name: path.parse(documentPath).name, base: path.parse(documentPath).base })
}


module.exports = function(config) {
  config.addPlugin(eleventyNavigationPlugin);

  config.addPassthroughCopy('media');
  config.addPassthroughCopy('site/_js/')

  config.addCollection('documents', function(collection) {
    return documents;
  });


  return {
    markdownTemplateEngine: "njk",
    dir: {
      input: "site", 
      includes: "_includes",
      data: "_data",
    }
  };
};

