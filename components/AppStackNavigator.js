import Splash from './Splash'
import AccountUser from './AccountUser'
import Loading from './Loading'
import TabNavigator from './TabNavigator'
import DrawerNavigator from './DrawerNavigator'

import {createStackNavigator, createAppContainer } from 'react-navigation'

const AppNavigator = createStackNavigator ({
  Splash: Splash,
  Loading: Loading,
  AccountUser: AccountUser,
  DrawerNavigator: DrawerNavigator,
  TabNavigator: TabNavigator,
}, {
  initalRouteName: 'Splash',
  header: null,
  headerMode: 'none',
  navigationOptions: {
    header: null
  }
})

export default createAppContainer(AppNavigator)
