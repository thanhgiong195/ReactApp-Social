import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Chat extends Component {
  static navigationOptions = {
    // tabBarLabel: 'Chat',
    tabBarIcon: ({tintColor}) => (
      <Ionicons name="ios-chatbubbles" size={20} color={tintColor}></Ionicons>
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