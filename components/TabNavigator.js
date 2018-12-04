import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import ListData from './ListData';
import Settings from './Settings';
import Chat from './Chat';

const TabNavigator = createBottomTabNavigator({
  Tab1: ListData,
  Tab3: Chat,
  Tab2: Settings,
}, {
  tabBarOptions: {
    gesturesEnabled: true, //scoll tab
    swipeEnabled: true,
    animationEnabled: true,
    // activeTintColor: 'white', //active color
    activeBackgroundColor: 'pink', //active background color
    labelStyle: {
      fontSize: 14,
      padding: 5
    }
  }
});

TabNavigator.navigationOptions = {
  title: 'Tab example'
};

export default createAppContainer(TabNavigator);