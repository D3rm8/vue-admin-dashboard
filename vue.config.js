module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
            @import "@/global-styles/colours.scss";
            @import "@/global-styles/typography.scss";
        `
      }
    }
  }
};
