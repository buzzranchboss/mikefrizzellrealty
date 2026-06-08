module.exports = function(eleventyConfig) {
  return {
    dir: {
      input: "src",
      includes: "layouts",
      output: "public"
    }
  };
};