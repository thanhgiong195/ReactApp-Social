import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class Chat extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Chat',
    tabBarIcon: ({tintColor}) => (
      <Ionicons name="ios-chatbubbles" size={20} color={'blue'}></Ionicons>
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
            This is Tab Chat
          </Text>
      </View>
    )
  }
}