import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Notification extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Notification',
    tabBarIcon: ({tintColor}) => (
      <Ionicons name="ios-notifications" size={20} color={'blue'}></Ionicons>
    )
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Text style={{fontSize: 30}}>
            This is Tab Notification
          </Text>
      </View>
    )
  }
}