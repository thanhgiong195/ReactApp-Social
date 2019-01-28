import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Cloudy extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Cloudy',
    tabBarIcon: ({tintColor}) => (
      <Ionicons name="ios-cloudy" size={20} color={'blue'}></Ionicons>
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
            This is Tab Cloudy
          </Text>
      </View>
    )
  }
}