const path = require("path");
const config = require("./common");

config.host = "http://localhost:6006";
// config.host = 'http://localhost:6006:8000/echarts';

config.cdnPayRootMap = {
  zh: config.host,
  en: "http://localhost:6006",
};
config.cdnFreeRootMap = {
  zh: config.host,
  en: config.host,
};

config.galleryPath = "http://localhost:6006/examples/";
config.releaseDestDir = path.resolve(__dirname, "../../echarts-website");

module.exports = config;
