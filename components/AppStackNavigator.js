import Login from './Login'
import Splash from './Splash'
import {createStackNavigator, createAppContainer } from 'react-navigation'

const AppNavigator = createStackNavigator ({
  //Screen
  Splash: {
    screen: Splash
  },
  Login: {
    screen: Login
  }
}, {
  //Setting
  initalRouteName: 'Splash',
  header: null,
  headerMode: 'none',
  navigationOptions: {
    header: null
  }
})

export default createAppContainer(AppNavigator)
