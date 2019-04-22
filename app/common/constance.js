/**
 * 常量
 */

import { Dimensions, Platform } from 'react-native';

const { height, width } = Dimensions.get('window');

export const VALUE = {
  width: width,
  height: height,
  ios: Platform.OS === 'ios',
  android: Platform.OS === 'android',
  introduce:
    '以下将展示 React-Native 官方组件功能，组件样式及样例仅供参考，开发时可根据自身需求自定义样式，具体参见 React-Native 官方文档。\n',
  introduceTitle: '🍋 React-Native 官方文档示例演示 🍋',
  html: `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no, viewport-fit=cover">
    <title></title>
    <link href="https://apps.bdimg.com/libs/highlight.js/9.1.0/styles/solarized-light.min.css" rel="stylesheet">
    <script src="http://apps.bdimg.com/libs/highlight.js/9.1.0/highlight.min.js"></script>
    <script>hljs.initHighlightingOnLoad();</script>
  </head><body>
  `
};
