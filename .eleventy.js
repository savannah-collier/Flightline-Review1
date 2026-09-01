module.exports = function (eleventyConfig) {
  // Copy these straight through to the built site, unchanged
  eleventyConfig.addPassthroughCopy("src/style.css");
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy("src/images");

  // Turns a date into MM.DD.YYYY to match the site's dateline style
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    const d = new Date(dateObj);
    return d.toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    });
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site",
    },
    // Plain .html files (index, about, contact) pass through untouched
    htmlTemplateEngine: false,
    markdownTemplateEngine: "njk",
  };
};
