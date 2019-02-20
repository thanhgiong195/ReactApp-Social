import React, {Component} from 'react';
import ListData from '../ListData'
import DetailsItem from '../DetailsItem'
import {createStackNavigator, createAppContainer } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons';

class Home extends Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({tintColor}) => (
      <Ionicons name="ios-home" size={20} color={tintColor}></Ionicons>
    )
  }

  render() {
    return (
      <ListData navigation={this.props.navigation} />
    )
  }
}

const AppNavigator = createStackNavigator ({
  Home: Home,
  DetailsItem: DetailsItem
}, {
  initialRouteName: 'Home',
  headerMode: 'none',
})

export default createAppContainer(AppNavigator)
