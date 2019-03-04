import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Button
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {COLOR_PINK, COLOR_PINK_LIGHT, COLOR_FACEBOOK, COLOR_PINK_MEDIUM} from '../myColor';
import { LoginManager, AccessToken  } from 'react-native-fbsdk'
export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  loginFacebook = () => {
    LoginManager
      .logInWithReadPermissions(['public_profile', 'email'])
      .then((result) => {
        if (result.isCancelled) {
          alert('Login was cancelled');
        } 
        console.log(`Login success with: ${result.grantedPermissions.toString()}`);
        return AccessToken.getCurrentAccessToken();
      })
      .then((currentUser) => {
        console.log(`FB: ${JSON.stringify(currentUser)}`);
      })
      .then((error) => {
        console.log('Login failed with error: ' + error);
      });
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
            <Ionicons name="ios-person" size={80} color={'#e3e3e3'}></Ionicons>
            <Text style={styles.title}>
              Login
            </Text>
          </View>

          <View style={styles.down}>
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                textContentType='emailAddress'
                keyboardType='email-address'
                placeholder="Enter your email"
                onChangeText={(email) => this.setState({email})}
              >
              </TextInput>
            </View>

            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Enter your password"
                secureTextEntry={true} // abc -> ***
                onChangeText={(password) => this.setState({password})}
              >
              </TextInput>
            </View>

            <View style={{flexDirection: 'row', marginTop: 20}}>
              <TouchableOpacity style={styles.loginButton} 
                // onPress={this.handleLogin}
                onPress={() => this.props.navigation.navigate("Mainscreen")}
                >
                <Text style={styles.titleButtonLogin}>LOGIN</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.signupButton} 
                onPress={() => this.props.navigation.navigate("Register")}>
                <Text style={styles.titleButtonLogin}>SIGNUP</Text>
              </TouchableOpacity>
            </View>

            <Divider style={styles.divider}></Divider>
              <FontAwesome.Button
                style={styles.loginButtonWithFB}
                name="facebook"
                backgroundColor={COLOR_FACEBOOK}
                onPress={this.loginFacebook}
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
    width: 140,
    height: 40,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    marginRight: 10,
  },
  signupButton: {
    width: 140,
    height: 40,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    marginLeft: 10,
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
