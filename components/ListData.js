import React, {Component} from 'react';
import {Platform, StyleSheet, ActivityIndicator, Image, Text, View, FlatList, Alert, RefreshControl} from 'react-native';
import {COLOR_PINK, COLOR_PINK_LIGHT, COLOR_FACEBOOK, COLOR_PINK_MEDIUM} from './myColor';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Swipeout from 'react-native-swipeout';

class FlatListItem extends Component {
  render() {
    const swipeSettings = {
      autoClose: true,

      onClose: (secId, rowId, direction) => {
        if(this.state.activeRowKey != null) {
          this.setState({ activeRowKey: null });
        }
      },

      onOpen: (secId, rowId, direction) => {
        this.setState({ activeRowKey: this.props.item.id });
      },
      right: [
        {
          onPress: () => {
            Alert.alert (
              'Alert',
              'Are you sure you want to delete ?',
              [
                {text: 'No', onPress: () => console.log('Cancel pressed'), style: 'cancel'},
                {text: 'Yes', onPress: () => {

                }},
              ],
              { cancelable: true}
            );
          },
          text: 'Delete', type: 'delete'
        }
      ],
      rowId: this.props.item.id,
      sectionId: 1
    };

    return (
      <Swipeout {...swipeSettings}>
        <View style={{flex:1,flexDirection:'row',marginBottom: 1, padding: 9, backgroundColor:'mediumseagreen'}}>
          <Image 
            style={{width: 50, height: 50}} 
            source={{uri: this.props.item.image}} 
          />
          <View style={{flex: 1,flexDirection:'column', marginLeft: 10}}>
            <Text style={{color: 'white'}}>Title: {this.props.item.title}</Text>
            <Text style={{color: 'white'}}>Release year: {this.props.item.releaseYear}</Text>
          </View>
        </View>
      </Swipeout>
    )
  }
}

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
      refreshing: false,
      dataMovies: [],
      activeRowKey: null
    }
  }

  componentDidMount() {
    this._refreshDataFromServer();
  }

  _refreshDataFromServer = () => {
    this.setState({ refreshing: true });
    fetch("http://demo4051565.mockable.io/movies")
    .then((res) => res.json())
    .then((resJson) => {
      this.setState({
        isLoading: false,
        refreshing: false,
        dataMovies: resJson.movies
      });
    })
  }

  _onRefresh = () => {
    this._refreshDataFromServer();
  }

  _keyExtractor = (item, index) => item.id;

  _renderItem = ({item}) => (
    <FlatListItem
      item={item}
    />
  );

  render() {
    if (this.state.isLoading) {
      return (
        <View>
          <ActivityIndicator />
        </View>
      )
    }
    return (
      <View style={{flex: 1}}>
        <Text style={{textAlign: 'center', fontSize: 18, padding: 10}}>List movies today</Text>
        <FlatList 
          data={this.state.dataMovies}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          refreshControl={
            <RefreshControl 
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            />
          }
        >
        </FlatList>
      </View>
    );
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
