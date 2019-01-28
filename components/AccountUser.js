import React, {Component} from 'react'
import Login from './account/Login'
import Register from './account/Register'
import {createStackNavigator, createAppContainer } from 'react-navigation'

class AccountUser extends Component {
  render() {
    return (
      <Login navigation={this.props.navigation} />
    )
  }
}

const AccountNavigator = createStackNavigator ({
  AccountUser: AccountUser,
  Register: Register
}, {
  initialRouteName: 'AccountUser',
  headerMode: 'none',
})

export default createAppContainer(AccountNavigator)