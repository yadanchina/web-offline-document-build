const path = require("path");
const config = require("./common");

config.host = "";

config.cdnPayRootMap = {
  // Expensive!!! use it carefully.
  // zh: 'https://echarts-www.cdn.bcebos.com', // origin: 'https://echarts-www.bj.bcebos.com'
  // zh: '/fastly.jsdelivr.net/gh/apache/echarts-website@asf-site',
  zh: "",
  en: "",
};
config.cdnFreeRootMap = {
  // 'echarts.cdn.apache.org' have been configured for zh (?)
  // zh: 'https://echarts.cdn.apache.org',
  // zh: '/fastly.jsdelivr.net/gh/apache/echarts-website@asf-site',
  zh: "",
  en: "",
};
config.galleryPath = "/examples/";
config.releaseDestDir = path.resolve(__dirname, "../../echarts-website");

module.exports = config;
