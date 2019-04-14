/**
 * tab 层
 */
import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/AntDesign';

import Component from '../view/component';
import API from '../view/api';
import Other from '../view/other';

const Tab = createBottomTabNavigator(
  {
    Component: {
      screen: Component,
      navigationOptions: {
        title: 'Component',
        gesturesEnabled: true,
        tabBarVisible: true,
        tabBarLabel: 'Component',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name={focused ? 'appstore1' : 'appstore-o'}
            size={26}
            style={{ color: tintColor }}
          />
        )
      }
    },
    API: {
      screen: API,
      navigationOptions: {
        headerTitle: 'API',
        gesturesEnabled: true,
        tabBarVisible: true,
        tabBarLabel: 'API',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon name='API' size={26} style={{ color: tintColor }} />
        )
      }
    },
    Other: {
      screen: Other,
      navigationOptions: {
        headerTitle: 'DOC',
        gesturesEnabled: true,
        tabBarVisible: true,
        tabBarLabel: 'DOC',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon name='rocket1' size={26} style={{ color: tintColor }} />
        )
      }
    }
  },
  {
    tabBarPosition: 'bottom',
    lazy: true
  }
);

export default Tab;
