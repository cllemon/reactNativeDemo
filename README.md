# React-Native-Demos

React-Native-Demos 是基于 react-native 官方文档，把文档所列出的基础组件（简洁、易用、高效） 和 API 实现一遍，并以演示的形式呈现出来。

![](https://img.shields.io/badge/License-MIT-lightgrey.svg) ![](https://img.shields.io/badge/Powered%20by-ReactNative-28b1b0.svg)

## 在线体验

通过下面的二维码，可以在手机中安装体验 React-Native-Demos：

|         | 二维码                          | 描述                                                                                                               |
| ------- | ------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Android | ![](/public/images/QR_v1.0.png) | [ reactNativeDemo.apk](https://github.com/cllemon/reactNativeDemo/releases/download/v1.0/reactNativeDemo-v1.0.apk) |
| IOS     | [....]()                        | 👍                                                                                                                 |

> 注：微信等扫码跳转，在浏览器打开允许下载即可。

## 说明

> 目的是为了直观的熟悉官方提供了哪些能力，使之更熟悉 react-native ，为开发做好充分的准备。

> 将持续更新，直到保持和英文文档进度一致；另还将收录一些第三方库和项目沉淀的一些组件，若有任何问题欢迎交流讨论

> 如果对您有帮助，您可以点右上角 "Star" 鼓励一下 谢谢！ ^\_^

## 演示图例

![](/public/images/demo_1.png)
![](/public/images/demo_2.png)
![](/public/images/demo_3.gif)

## 第三方框架及开发环境

- 开发环境:

  - macOS 10.14.3
  - node "v8.8.0"
  - react-native-cli "2.0.1"
  - Android Studio "3.2"
  - Xcode "10.2.1"

- 第三方框架
  - [react-native(0.59.4)](https://github.com/facebook/react-native)
  - [react-native-fs](https://github.com/itinance/react-native-fs)
  - [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)
  - [react-native-webview](https://github.com/react-native-community/react-native-webview)
  - [react-navigation](https://github.com/react-navigation/react-navigation)

## 本地运行

1. [配置 react-native 环境](https://reactnative.cn/docs/getting-started/)

2. 安装 react-native-cli `$ npm i -g react-native-cli`

3. Clone React-Native-Demos 仓库到本地

4. 安装依赖 `$ yarn || npm i`

5. 安装导航依赖 `$ yarn add react-native-gesture-handler || npm install --save react-native-gesture-handler`

6. 链接资源 `$ react-native link react-native-gesture-handler & react-native link react-native-webview & react-native link react-native-vector-icons & react-native link react-native-fs`

7. `$ cd project`

8. 打开模拟器

9. 运行项目 `$ npm run android || npm run ios`

> PS：
> 包含本机 Objective-C，Swift，Java 或 Kotlin 代码的 React Native 模块必须“链接”，以便编译器知道将它们包含在应用程序中。

> PS：
> 运行 Android 项目时，先打开 Virtual Device 或者[真机调式](https://reactnative.cn/docs/running-on-device/)

## 更新进度

- 基础组件

  - [x] View
  - [x] Text
  - [x] TextInput
  - [x] Button
  - [x] Image
  - [x] ImageBackground
  - [x] Slider
  - [x] Switch

- 通用组件

  - [x] ActivityIndicator
  - [x] ScrollView
  - [x] FlatList
  - [x] SectionList
  - [x] Modal
  - [x] Picker
  - [x] StatusBar
  - [x] ViewPagerAndroid
  - [x] TouchableHighlight
  - [x] TouchableOpacity
  - [x] TouchableWithoutFeedback

- Component - Android

  - [ ] DrawerLayoutAndroid => 待续
  - [ ] ProgressBarAndroid => 待续
  - [ ] ToolbarAndroid => 待续

- Component - IOS

  - [ ] DatePickerIOS => 待续
  - [ ] MaskedViewIOS => 待续
  - [ ] PickerIOS => 待续
  - [ ] ProgressViewIOS => 待续
  - [ ] SafeAreaView => 待续
  - [ ] SegmentedControlIOS => 待续
  - [ ] SnapshotViewIOS => 待续

- API - 交互

  - [x] Alert
  - [x] AccessibilityInfo
  - [x] AppState
  - [x] ToastAndroid
  - [x] CameraRoll
  - [x] Clipboard
  - [x] Dimensions
  - [x] DatePickerAndroid
  - [ ] Geolocation => 待续
  - [ ] AsyncStorage => 待续
  - [ ] ActionSheetIOS => 待续
  - [ ] AppRegistry => 待续
  - [ ] BackHandler => 待续
  - [ ] ImageEditor => 待续
  - [ ] ImagePickerIOS => 待续
  - [ ] ImageStore => 待续
  - [ ] InteractionManager => 待续
  - [ ] Keyboard => 待续
  - [ ] Linking => 待续
  - [ ] NetInfo => 待续
  - [ ] PanResponder => 待续
  - [ ] PermissionsAndroid => 待续
  - [ ] Settings => 待续
  - [ ] Share => 待续
  - [ ] Systrace => 待续
  - [ ] TimePickerAndroid => 待续
  - [ ] Vibration => 待续

- API - 布局

  - [x] FlexBox

- API - 动画

  - [ ] Animated => 待续
  - [ ] Easing => 待续
  - [ ] LayoutAnimation => 待续

- API - 样式
  - [ ] ImageStyle => 待续
  - [ ] PixelRatio => 待续
  - [ ] Shadow => 待续
  - [ ] StyleSheet => 待续
  - [ ] TextStyle => 待续
  - [ ] Transforms => 待续
  - [ ] ViewStyle => 待续

### 开源协议

本项目基于 [MIT](http://opensource.org/licenses/MIT) License，请自由的享受、参与开源。
