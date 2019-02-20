import React from 'react'
import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native'
import {createDrawerNavigator, createAppContainer, DrawerItems} from 'react-navigation'
import Mainscreen from './Mainscreen';
import SettingsScreen from './SettingsScreen'

const AppDrawerNavigator = createDrawerNavigator({
    Home: Mainscreen,
    SettingsScreen: SettingsScreen
})

export default createAppContainer(AppDrawerNavigator);
