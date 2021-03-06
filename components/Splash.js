import React, {Component} from 'react';
import {Platform, StyleSheet, Image, Text, View, TextInput, Animated, Dimensions} from 'react-native';
import {COLOR_PINK, COLOR_PINK_LIGHT, COLOR_FACEBOOK, COLOR_PINK_MEDIUM} from './myColor';
import { AccessToken }  from 'react-native-fbsdk'

var {height, width} = Dimensions.get('window')

export default class Splash extends Component {

  constructor(props) {
    super(props)
    this.state = {
      logoOpacity: new Animated.Value(0),
      titleMarginTop: new Animated.Value(height / 2),
      accessToken: null
    }
  }

  componentDidMount () {

    AccessToken.getCurrentAccessToken()
    .then((data) => {
      this.setState({
        accessToken: data.accessToken
      })
    })
    .catch(error => {
      console.log(error)
    })

    Animated.sequence([
      Animated.timing(this.state.logoOpacity, {
        toValue: 1,
        duration: 1000,
      }),
      Animated.timing(this.state.titleMarginTop, {
        toValue: 10,
        duration: 1000,
      }),
    ]).start(() => {
      //this.props.navigation.navigate("AccountUser")
      if (this.state.accessToken) {
        this.props.navigation.navigate("Mainscreen")
      } else {
        this.props.navigation.navigate("AccountUser")
      }
    })
  }

  render() {
    return <View style={styles.container}>
      <Animated.Image source={require('../images/banner.jpg')}
        style={{...styles.logo, opacity: this.state.logoOpacity}}>
      </Animated.Image>
      <Animated.Text style={{...styles.title, marginTop: this.state.titleMarginTop}}>
        Share your image for everone
      </Animated.Text>
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR_PINK_LIGHT
  },
  logo: {
    width: 130,
    height: 90,
    borderRadius: 20,
  },
  title: {
    color: COLOR_PINK_MEDIUM,
    marginTop: 10,
    textAlign: 'center',
    width: 400,
    fontSize: 20
  }
})
