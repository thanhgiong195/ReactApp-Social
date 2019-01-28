import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'

import Home from './tab/Home'
import Settings from './tab/Settings'
import Chat from './tab/Chat'
import Cloudy from './tab/Cloudy'
import Notification from './tab/Notification'

const TabNavigator = createBottomTabNavigator({
  Tab1: Home,
  Tab2: Chat,
  Tab3: Cloudy,
  Tab4: Notification,
  Tab5: Settings,
}, {
  tabBarOptions: {
    gesturesEnabled: true, //scoll tab
    swipeEnabled: true,
    animationEnabled: true,
    activeTintColor: '#FFA500', //active color
    activeBackgroundColor: 'pink', //active background color
    showLabel: false,
    labelStyle: {
      fontSize: 14,
      padding: 0
    }
  }
});

TabNavigator.navigationOptions = {
  title: 'Tab example'
};

export default createAppContainer(TabNavigator);