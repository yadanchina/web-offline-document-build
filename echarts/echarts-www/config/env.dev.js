const path = require("path");
const config = require("./common");

config.host = "http://localhost/echarts-website";
// config.host = 'http://localhost:8000/echarts/echarts-website';
config.cdnPayRootMap = {
  zh: config.host,
  en: config.host,
};
config.cdnFreeRootMap = {
  zh: config.host,
  en: config.host,
};
config.galleryPath = "/examples/";
config.releaseDestDir = path.resolve(__dirname, "../../echarts-website");

module.exports = config;
