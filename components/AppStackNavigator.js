import Login from './Login'
import Splash from './Splash'
import TabNavigator from './TabNavigator'
import {createStackNavigator, createAppContainer } from 'react-navigation'

const AppNavigator = createStackNavigator ({
  //Screen
  Splash: {
    screen: Splash
  },
  Login: {
    screen: Login
  },
  TabNavigator: {
    screen: TabNavigator
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
