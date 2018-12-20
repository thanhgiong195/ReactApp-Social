import Splash from './Splash'
import Login from './Login'
import TabNavigator from './TabNavigator'
import ListData from './ListData'
import DetailsItem from './DetailsItem'
import {createStackNavigator, createAppContainer } from 'react-navigation'

const AppNavigator = createStackNavigator ({
  // Splash: Splash,
  // Login: Login,
  TabNavigator: TabNavigator,
  ListData: ListData,
  DetailsItem: DetailsItem
}, {
  initalRouteName: 'TabNavigator',
  header: null,
  headerMode: 'none',
  navigationOptions: {
    header: null
  }
})

export default createAppContainer(AppNavigator)
