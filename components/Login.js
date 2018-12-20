import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {COLOR_PINK, COLOR_PINK_LIGHT, COLOR_FACEBOOK, COLOR_PINK_MEDIUM} from './myColor';

export default class Login extends Component {

  async componentDidMount () {
    setTimeout(() => {
      this.props.navigation.navigate("TabNavigator")
    }, 1000);
  }

  render() {
    const Divider = (props) => {
      return <View {...props}>
        <View style={styles.line}></View>
        <View style={styles.textOR}><Text>OR</Text></View>
        <View style={styles.line}></View>
      </View>
    }

    return (

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.up}>
            <Ionicons name="ios-speedometer" size={80} color={'#e3e3e3'}></Ionicons>
            <Text style={styles.title}>
              Share your image for everone
            </Text>
          </View>

          <View style={styles.down}>
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                textContentType='emailAddress'
                keyboardType='email-address'
                placeholder="Enter your email"
              >
              </TextInput>
            </View>

            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Enter your password"
                secureTextEntry={true} // abc -> ***
              >
              </TextInput>
            </View>

            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.titleButtonLogin}>LOGIN</Text>
            </TouchableOpacity>

            <Divider style={styles.divider}></Divider>

            <FontAwesome.Button
              style={styles.loginButtonWithFB}
              name="facebook"
              backgroundColor={COLOR_FACEBOOK}
            >
              <Text style={styles.titleButtonLoginWithFB}>Login with Facebook</Text>
            </FontAwesome.Button>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: COLOR_PINK_MEDIUM,
  },
  up: {
    flex: 3, //30% height
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  down: {
    flex: 7,//70% height
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  title: {
    color: '#FFFFFF',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 20,
  },
  textInputContainer: {
    paddingHorizontal: 10,
    borderRadius: 6,
    marginTop: 20,
    backgroundColor: 'rgba(255,255,255,0.2)'
  },
  textInput: {
    width: 280,
    height: 45,
    color: '#00000090'
  },
  loginButton: {
    width: 300,
    height: 40,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    marginTop: 20,
  },
  titleButtonLogin: {
    fontSize: 16,
    color: 'white',
  },
  loginButtonWithFB: {
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleButtonLoginWithFB: {
    fontSize: 16,
    color: 'white',
  },
  line: {
    height: 1,
    flex: 2,
    backgroundColor: '#00000080'
  },
  textOR: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  divider: {
    flexDirection: 'row',
    width: 300,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
