const path = require("path");

module.exports = {
  galleryViewPath: "http://localhost:6006/examples/${lang}/view.html?c=",
  galleryEditorPath: "http://localhost:6006/examples/${lang}/editor.html?c=",
  handbookPath: "http://localhost:6006/handbook/${lang}/",
  websitePath: "./",

  imagePath: "asset/img/",
  gl: {
    imagePath: "asset/gl/img/",
  },

  releaseDestDir: path.resolve(__dirname, "../../echarts-website"),
  ecWWWGeneratedDir: path.resolve(__dirname, "../../echarts-www/_generated"),
};
