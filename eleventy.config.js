// plugins
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const htmlmin = require("html-minifier");
const fg = require('fast-glob');
const path = require('path');



module.exports = function(config) {
  config.addPlugin(eleventyNavigationPlugin);

  config.addPassthroughCopy('media');
  config.addPassthroughCopy('site/_js/')

  config.addCollection('documents', function(collection) {
    // defining file paths
    const documentPaths = fg.sync(['**/media/documents/*', '!**/_site']);

    const documents = []
    for (documentPath of documentPaths) {
      documents.push({ path: documentPath, name: path.parse(documentPath).name, base: path.parse(documentPath).base })
    }
    return documents;
  });

  config.addCollection('board_members', collection => {
    board_members = collection.getFilteredByTag('board_member')
    board_members.sort((a, b) => a.data.order - b.data.order)
    return board_members
  })


  config.addTransform("htmlmin", function(content) {
    // Prior to Eleventy 2.0: use this.outputPath instead
    if( this.page.outputPath && this.page.outputPath.endsWith(".html") ) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
      return minified;
    }
    return content;
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

