/**
 * router 层
 */
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { routerList } from './list';

const StackNavigatorConfigs = {
  initialRouteName: 'Tab'
  // initialRouteName: 'ScrollView'
};

const AppNavigator = createStackNavigator(routerList, StackNavigatorConfigs);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
