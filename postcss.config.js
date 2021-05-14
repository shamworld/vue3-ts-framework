/*
 * @message: 文件描述
 * @Author: Jack
 * @Email: Jack@163.com
 * @Github: Jack@163.com
 * @Date: 2020-08-07 17:05:31
 * @LastEditors: Roy
 * @LastEditTime: 2021-03-26 15:48:12
 * @Deprecated: 否
 * @FilePath: /vue-ts-framework/postcss.config.js
 */
module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-pxtorem": {
      rootValue: 75, // 根据设计图尺寸写，设计图是1920，就写192
      propList: ["*"], // 需要被转换的属性
      selectorBlackList: ["el"], // 不进行px转换的选择器，不转换element的标签样式，根据自己项目需求来定义
    },
  },
};
