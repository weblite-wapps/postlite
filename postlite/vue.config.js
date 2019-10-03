module.exports = {
  baseUrl: "/wapp/5d95b320de56f067653806bd/",
  pages: {
    main: {
      entry: "src/main/main.js",
      template: "public/index.html",
      filename: "index.main.html"
    },
    customize: {
      entry: "src/customize/main.js",
      template: "public/index.html",
      filename: "index.customize.html"
    },
    inline: {
      entry: "src/inline/main.js",
      template: "public/index.html",
      filename: "index.inline.html"
    }
  }
};
