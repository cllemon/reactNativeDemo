export const componentLabel = [
  {
    label: '基础组件',
    value: 'basic',
    icon: 'power-plug',
    children: [
      {
        label: '创建 UI 时最基础的组件',
        value: 'View'
      },
      {
        label: '文本显示',
        value: 'Text'
      },
      {
        label: '文本输入框',
        value: 'TextInput'
      },
      {
        label: '跨平台的按钮组件',
        value: 'Button'
      },
      {
        label: '显示多种不同类型图片组件',
        value: 'Image'
      },
      {
        label: '背景图像组件',
        value: 'ImageBackground'
      },
      {
        label: '范围值选择器',
        value: 'Slider'
      },
      {
        label: '跨平台通用的“开关”',
        value: 'Switch'
      }
    ]
  },
  {
    label: '通用组件',
    value: 'common',
    icon: '500px-with-circle',
    children: [
      {
        label: '圆形的 loading 提示符号',
        value: 'ActivityIndicator'
      },
      {
        label: '滚动视图',
        value: 'ScrollView'
      },
      {
        label: '高性能长列表',
        value: 'FlatList'
      },
      {
        label: '高性能的分组(section)列表',
        value: 'SectionList'
      },
      // {
      //   label: '用在ScrollView或FlatList内部，为其添加下拉刷新的功能',
      //   value: 'RefreshControl'
      // },
      // {
      //   label: 'FlatList和SectionList的底层实现',
      //   value: 'VirtualizedList'
      // },
      // {
      //   label: '根据键盘的位置自动调整视图位置，避免遮挡',
      //   value: 'KeyboardAvoidingView'
      // },
      {
        label: '弹出框（覆盖在其他视图之上）',
        value: 'Modal'
      },
      {
        label: '原生选择器',
        value: 'Picker'
      },
      {
        label: '控制应用状态栏',
        value: 'StatusBar'
      },
      {
        label: 'WebView - 用于访问一个网页',
        value: 'WebView'
      },
      {
        label: '响应触摸操作 - 高亮/透明度/没有任何视觉反馈',
        value: 'Touchable' // Highlight/Opacity/WithoutFeedback
      }
      // {
      //   label: '响应触摸操作 - 透明度',
      //   value: 'TouchableOpacity'
      // },
      // {
      //   label: '响应触摸操作 - 没有任何视觉反馈',
      //   value: 'TouchableWithoutFeedback'
      // }
    ]
  },
  {
    label: 'Android',
    value: 'Android',
    icon: 'bug',
    children: [
      {
        label: '允许在子视图之间左右翻页的容器',
        value: 'ViewPagerAndroid',
        platForm: 'android'
      },
      {
        label: 'Android 平台 - 抽屉',
        value: 'DrawerLayoutAndroid',
        platForm: 'android'
      },
      {
        label: 'Android 平台 - 进度条',
        value: 'ProgressBarAndroid',
        platForm: 'android'
      },
      {
        label: 'Android 平台 - 工具栏(Toolbar)部件',
        value: 'ToolbarAndroid',
        platForm: 'android'
      }
      // {
      //   label: 'Android 平台 - 响应触摸操作',
      //   value: 'TouchableNativeFeedback'
      // }
    ]
  },
  {
    label: 'IOS',
    value: 'IOS',
    icon: 'app-store',
    children: [
      {
        label: 'iOS 平台 - 日期/时间选择器',
        value: 'DatePickerIOS',
        platForm: 'ios'
      },
      {
        label: 'iOS 平台 - 渲染一个带蒙版的视图',
        value: 'MaskedViewIOS',
        platForm: 'ios'
      },
      {
        label: 'iOS 平台 - 选择器',
        value: 'PickerIOS',
        platForm: 'ios'
      },
      {
        label: 'iOS 平台 - 进度条',
        value: 'ProgressViewIOS',
        platForm: 'ios'
      },
      {
        label: 'iOS 平台 - 分段显示多个选项',
        value: 'SegmentedControlIOS',
        platForm: 'ios'
      },
      {
        label: 'iOS 平台 - SnapshotViewIOS',
        value: 'SnapshotViewIOS',
        platForm: 'ios'
      },
      {
        label: 'iOS 平台 - 在一个“安全”的可视区域内渲染内容',
        value: 'SafeAreaView',
        platForm: 'ios'
      }
    ]
  }
];

export const APILabel = [
  {
    label: '交互',
    value: 'interaction',
    icon: 'google-drive',
    children: [
      {
        label: '提示对话框 & AlertIOS',
        value: 'Alert'
      },
      {
        label: '查询读屏应用的当前状态',
        value: 'AccessibilityInfo'
      },
      {
        label: '应用当前是在前台还是在后台',
        value: 'AppState'
      },
      {
        label: 'Android 平台 - 设备上显示一个悬浮的提示信息',
        value: 'ToastAndroid',
        platForm: 'android'
      },
      {
        label: '访问本地相册的功能',
        value: 'CameraRoll'
      },
      {
        label: '在 iOS 和 Android 的剪贴板中读写内容',
        value: 'Clipboard'
      },
      {
        label: '获取设备屏幕的宽高',
        value: 'Dimensions'
      },
      {
        label: 'Android 平台 - 日期选择器的对话框',
        value: 'DatePickerAndroid',
        platForm: 'android'
      },
      {
        label: 'iOS 平台 - ImagePickerIOS',
        value: 'ImagePickerIOS',
        platForm: 'ios'
      },
      {
        label: 'Share 类',
        value: 'Share'
      },
      {
        label: 'iOS 平台 - 显示一个 ActionSheet 弹出框',
        value: 'ActionSheetIOS',
        platForm: 'ios'
      },
      {
        label: 'Android 平台 - 时间选择器的对话框',
        value: 'TimePickerAndroid',
        platForm: 'android'
      },
      {
        label: '控制设备震动',
        value: 'Vibration'
      },
      {
        label: 'Android M(也就是6.0)开始提供的权限模型',
        value: 'PermissionsAndroid'
      },

      /********* none *********/

      {
        label: '获取设备当前的联网状态',
        value: 'NetInfo'
      },
      {
        label: '图片编辑',
        value: 'ImageEditor'
      },
      {
        label: '图片处理仓库',
        value: 'ImageStore'
      },
      {
        label: '将一些耗时较长的工作安排到所有互动或动画完成之后再进行',
        value: 'InteractionManager'
      },
      {
        label: '控制键盘相关的事件',
        value: 'Keyboard'
      },
      {
        label: '地理定位',
        value: 'Geolocation'
      },
      {
        label: '简单的、异步的、持久化的 Key-Value 存储系统',
        value: 'AsyncStorage'
      },
      {
        label: '根组件注册',
        value: 'AppRegistry'
      },
      {
        label: '监听设备上的后退按钮事件',
        value: 'BackHandler'
      },
      {
        label: '提供了一个通用的接口来与传入和传出的 App 链接进行交互',
        value: 'Linking'
      },
      {
        label: 'PanResponder类可以将多点触摸操作协调成一个手势',
        value: 'PanResponder'
      },
      {
        label:
          'iOS 平台 - 处理应用的推送通知，包括权限控制以及应用图标上的角标数（未读消息数）',
        value: 'PushNotificationIOS'
      },
      {
        label:
          'NSUserDefaults的包装, NSUserDefaults是仅在iOS上可用的持久键值存储',
        value: 'Settings'
      },
      {
        label: 'Systrace 类',
        value: 'Systrace'
      }
    ]
  },
  {
    label: '布局',
    value: 'layout',
    icon: 'sweden',
    children: [
      {
        label: 'FlexBox布局',
        value: 'FlexBox'
      }
    ]
  },
  {
    label: '动画',
    value: 'animation',
    icon: 'clapperboard',
    children: [
      {
        label: '动画库',
        value: 'Animated'
      },
      {
        label: '动画缓动函数',
        value: 'Easing'
      },
      {
        label: '当布局变化时，自动将视图运动到它们新的位置上',
        value: 'LayoutAnimation'
      }
    ]
  },
  {
    label: '样式',
    value: 'style',
    icon: 'palette',
    children: [
      {
        label: 'Image样式属性',
        value: 'ImageStyle'
      },
      {
        label: '访问设备的像素密度的方法',
        value: 'PixelRatio'
      },
      {
        label: '阴影样式属性',
        value: 'Shadow'
      },
      {
        label: '提供了一种类似 CSS 样式表的抽象',
        value: 'StyleSheet'
      },
      {
        label: 'Text样式属性',
        value: 'TextStyle'
      },
      {
        label: 'Transforms',
        value: 'Transforms'
      },
      {
        label: 'View样式属性',
        value: 'ViewStyle'
      }
    ]
  }
];

export const permissionMap = [
  {
    label: '已拒绝，不再询问',
    value: -1
  },
  {
    label: '拒绝授权',
    value: 0
  },
  {
    label: '授权成功',
    value: 1
  }
];

export const COMMON_IMAGE_FORMAT = [
  'png',
  'jpg',
  'jpeg',
  'bmp',
  'gif',
  'webp',
  'psd',
  'svg',
  'tiff'
];
