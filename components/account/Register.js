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
import {COLOR_PINK, COLOR_PINK_LIGHT, COLOR_FACEBOOK, COLOR_PINK_MEDIUM} from '../myColor';

export default class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => this.props.navigation.navigate('Main'))
      .catch(error => this.setState({ errorMessage: error.message }))
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
            <Ionicons name="ios-people" size={80} color={'#e3e3e3'}></Ionicons>
            <Text style={styles.title}>
              Create account
            </Text>
          </View>

          <View style={styles.down}>
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                textContentType='emailAddress'
                keyboardType='email-address'
                placeholder="Enter your email"
                onChangeText={email => this.setState({ email })}
                value={this.state.email}
              >
              </TextInput>
            </View>

            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Enter your password"
                secureTextEntry={true} // abc -> ***
                onChangeText={password => this.setState({ password })}
                value={this.state.password}
              >
              </TextInput>
            </View>

            <TouchableOpacity style={styles.loginButton} 
              onPress={this.handleSignUp}>
              <Text style={styles.titleButtonLogin}>SIGNUP</Text>
            </TouchableOpacity>

            
            <Divider style={styles.divider}></Divider>

            <TouchableOpacity style={styles.backButton} 
                onPress={() => this.props.navigation.goBack()}>
              <Text style={styles.titleButtonLogin}>Do you already have an account?</Text>
            </TouchableOpacity>
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
  backButton: {
    width: 300,
    height: 40,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
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
