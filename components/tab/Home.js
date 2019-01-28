import React, {Component} from 'react';
import ListData from '../ListData'
import DetailsItem from '../DetailsItem'
import {createStackNavigator, createAppContainer } from 'react-navigation'

class Home extends Component {
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
