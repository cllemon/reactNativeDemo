import Tab from './tab';
import { packageList } from '../package/index';

const navigationOption = (name, options = {}) => {
  return {
    screen: packageList[name],
    navigationOptions: {
      title: name,
      headerStyle: Object.assign(
        { marginTop: 24, height: 40 },
        options.headerStyle
      ),
      headerTitleStyle: Object.assign(
        { fontSize: 14 },
        options.headerTitleStyle
      )
    }
  };
};

export const routerList = {
  Tab: { screen: Tab, navigationOptions: () => ({ header: null }) },
  ActivityIndicator: navigationOption('ActivityIndicator'),
  FlatList: navigationOption('FlatList'),
  KeyboardAvoidingView: navigationOption('KeyboardAvoidingView'),
  Modal: navigationOption('Modal'),
  Picker: navigationOption('Picker'),
  RefreshControl: navigationOption('RefreshControl'),
  ScrollView: navigationOption('ScrollView'),
  SectionList: navigationOption('SectionList'),
  StatusBar: navigationOption('StatusBar'),
  // TouchableHighlight: { screen: packageList['TouchableHighlight'] },
  // TouchableOpacity: { screen: packageList['TouchableOpacity'] },
  // TouchableWithoutFeedback: { screen: packageList['TouchableWithoutFeedback'] },
  Touchable: navigationOption('Touchable'),
  ViewPagerAndroid: navigationOption('ViewPagerAndroid'),
  VirtualizedList: navigationOption('VirtualizedList'),
  WebView: navigationOption('WebView'),
  Button: navigationOption('Button'),
  View: navigationOption('View'),
  Text: navigationOption('Text'),
  TextInput: navigationOption('TextInput'),
  Image: navigationOption('Image'),
  ImageBackground: navigationOption('ImageBackground'),
  Slider: navigationOption('Slider'),
  Switch: navigationOption('Switch'),
  Alert: navigationOption('Alert'),
  AccessibilityInfo: navigationOption('AccessibilityInfo'),
  AppState: navigationOption('AppState'),
  CameraRoll: navigationOption('CameraRoll'),
  ToastAndroid: navigationOption('ToastAndroid'),
  Clipboard: navigationOption('Clipboard'),
  Dimensions: navigationOption('Dimensions'),
  DatePickerAndroid: navigationOption('DatePickerAndroid'),
  FlexBox: navigationOption('FlexBox'),
  DrawerLayoutAndroid: navigationOption('DrawerLayoutAndroid'),
  ProgressBarAndroid: navigationOption('ProgressBarAndroid'),
  DatePickerIOS: navigationOption('DatePickerIOS'),
  MaskedViewIOS: navigationOption('MaskedViewIOS'),
  PickerIOS: navigationOption('PickerIOS'),
  ProgressViewIOS: navigationOption('ProgressViewIOS'),
  SegmentedControlIOS: navigationOption('SegmentedControlIOS'),
  ImagePickerIOS: navigationOption('ImagePickerIOS'),
  Share: navigationOption('Share'),
  ActionSheetIOS: navigationOption('ActionSheetIOS'),
  TimePickerAndroid: navigationOption('TimePickerAndroid')
};
