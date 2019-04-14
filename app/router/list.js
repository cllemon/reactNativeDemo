import Tab from './tab';
import { packageList } from '../package/index';

export const routerList = {
  Tab: { screen: Tab, navigationOptions: () => ({ header: null }) },
  ActivityIndicator: { screen: packageList['ActivityIndicator'] },
  FlatList: { screen: packageList['FlatList'] },
  KeyboardAvoidingView: { screen: packageList['KeyboardAvoidingView'] },
  Modal: { screen: packageList['Modal'] },
  Picker: { screen: packageList['Picker'] },
  RefreshControl: { screen: packageList['RefreshControl'] },
  ScrollView: { screen: packageList['ScrollView'] },
  SectionList: { screen: packageList['SectionList'] },
  StatusBar: { screen: packageList['StatusBar'] },
  TouchableHighlight: { screen: packageList['TouchableHighlight'] },
  TouchableOpacity: { screen: packageList['TouchableOpacity'] },
  TouchableWithoutFeedback: { screen: packageList['TouchableWithoutFeedback'] },
  ViewPagerAndroid: { screen: packageList['ViewPagerAndroid'] },
  VirtualizedList: { screen: packageList['VirtualizedList'] },
  WebView: { screen: packageList['WebView'] },
  Button: { screen: packageList['Button'] },
  View: { screen: packageList['View'] },
  Text: { screen: packageList['Text'] },
  TextInput: { screen: packageList['TextInput'] },
  Image: { screen: packageList['Image'] },
  ImageBackground: { screen: packageList['ImageBackground'] },
  Slider: { screen: packageList['Slider'] },
  Switch: { screen: packageList['Switch'] }
};
