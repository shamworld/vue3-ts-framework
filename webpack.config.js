/*
 * @message: 描述
 * @Author: Roy
 * @Email: @163.com
 * @Github: @163.com
 * @Date: 2021-02-04 11:22:54
 * @LastEditors: Roy
 * @LastEditTime: 2021-08-17 09:49:52
 * @Deprecated: 否
 * @FilePath: /vue-ts-framework1/webpack.config.js
 */
module.exports = {
  publicPath: './',
  chainWebpack: (config) => {
    const oneOfsMap = config.module.rule("scss").oneOfs.store;
    oneOfsMap.forEach((item) => {
      item
        .use("sass-resources-loader")
        .loader("sass-resources-loader")
        .options({
          // Provide path to the file with resources
          // 要公用的scss的路径
          resources: "./src/style/index.scss",
        })
        .end();
    });
  },
};