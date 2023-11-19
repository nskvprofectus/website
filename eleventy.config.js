const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(config) {
  config.addPlugin(eleventyNavigationPlugin);

  config.addPassthroughCopy('media');
  config.addPassthroughCopy('site/_js/')


  return {
    dir: {
      input: "site", 
      includes: "_includes",
      data: "_data",
    }
  };
};

