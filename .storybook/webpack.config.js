const webpackConf = require("../webpack.config");

module.exports = {
  module: {
    rules: [webpackConf.module.rules[0], webpackConf.module.rules[1]]
  }
};
