import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'

import Home from './tab/Home'
import Settings from './tab/Settings'
import Chat from './tab/Chat'
import Cloudy from './tab/Cloudy'
import Notification from './tab/Notification'

const AppTabNavigator = createBottomTabNavigator({
  Tab1: Home,
  Tab2: Chat,
  Tab3: Cloudy,
  Tab4: Notification,
  Tab5: Settings,
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