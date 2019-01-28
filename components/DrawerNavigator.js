import React from 'react'
import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native'
import {createDrawerNavigator, createAppContainer, DrawerItems} from 'react-navigation'
import TabNavigator from './TabNavigator';
import SettingsScreen from './SettingsScreen'

const AppDrawerNavigator = createDrawerNavigator({
    Home: TabNavigator,
    SettingsScreen: SettingsScreen
})

export default createAppContainer(AppDrawerNavigator);
