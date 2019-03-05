import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { LoginManager, AccessToken, LoginButton  } from 'react-native-fbsdk'

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
          alignItems: 'center',
          backgroundColor: '#8c94c4'
        }}>
          <Text style={{fontSize: 30}}>
            This is Tab Chat
          </Text>

          <LoginButton
          onLoginFinished={
            (error, result) => {
              if (error) {
                console.log("login has error: " + result.error);
              } else if (result.isCancelled) {
                console.log("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    console.log(data.accessToken.toString())
                  }
                )
              }
            }
          }
          onLogoutFinished={() => console.log("logout.")}/>
      </View>
    )
  }
}