import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from './tab/Home'
import Profile from './tab/Profile'
import Chat from './tab/Chat'
import Cloudy from './tab/Cloudy'

const AppTabNavigator = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => (
        <Ionicons name="ios-home" size={20} color={tintColor}></Ionicons>
      )
    }
  },
  Chat: Chat,
  Cloudy: Cloudy,
  Profile: Profile,
}, {
  gesturesEnabled: true, //scoll tab
  swipeEnabled: true,
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: 'blue', //active color
    activeBackgroundColor: '#fff', //active background color
    showLabel: true,
    labelStyle: {
      fontSize: 12,
      padding: 0
    }
  }
});

export default createAppContainer(AppTabNavigator);