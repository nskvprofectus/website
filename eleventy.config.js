const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(config) {
  config.addPlugin(eleventyNavigationPlugin);

  config.addPassthroughCopy('media');


  return {
    dir: {
      input: "site", 
      includes: "includes",
      data: "data",
    }
  };
};

