import React, {Component} from 'react';
import {Platform, StyleSheet, ActivityIndicator, Image, Text, View, TextInput, ListView} from 'react-native';
import {COLOR_PINK, COLOR_PINK_LIGHT, COLOR_FACEBOOK, COLOR_PINK_MEDIUM} from './myColor';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class ListData extends Component {

  static navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({tintColor}) => (
      <Ionicons name="ios-home" size={20} color={'blue'}></Ionicons>
    )
  }

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataMovies: [],
    }
  }

  componentDidMount() {
    fetch("http://demo4051565.mockable.io/movies.json")
      .then((response) => response.json())
      .then((responseJson) => {

        var standardDataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataMovies: standardDataSource.cloneWithRows(responseJson.movies)
        });
      })
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View>
          <ActivityIndicator />
        </View>
      )
    }
    return (
      <View style={{flex: 1, paddingTop: 25}}>
        <ListView 
          dataSource={this.state.dataMovies}
          renderRow={
            (rowData) => 
              <View style={{flex:1,flexDirection:'row',marginBottom: 1, padding: 9, backgroundColor:'mediumseagreen'}}>
                <Image 
                  style={{width: 50, height: 50}} 
                  source={{uri: rowData.image}} 
                />
                <View style={{flex: 1,flexDirection:'column', marginLeft: 10}}>
                  <Text style={{color: 'white'}}>Title: {rowData.title}</Text>
                  <Text style={{color: 'white'}}>Release year: {rowData.releaseYear}</Text>
                </View>
              </View>
          }
        >
        </ListView>
      </View>
    )
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
