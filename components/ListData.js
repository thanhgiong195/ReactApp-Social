import React, {Component} from 'react';
import {Text,TouchableOpacity, StyleSheet, ActivityIndicator, View, FlatList, RefreshControl} from 'react-native';
import {COLOR_PINK, COLOR_PINK_LIGHT, COLOR_FACEBOOK, COLOR_PINK_MEDIUM} from './myColor';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AddModal from './AddModal'
import FlatListItem from './FlatListItem'

export default class ListData extends Component {

  static navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({tintColor}) => (
      <Ionicons name="ios-chatbubbles" size={20} color={'blue'}></Ionicons>
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

  //get data
  async _refreshDataFromServer() {
    this.setState({ refreshing: true });
    fetch("http://5c0644c8c16e120013947983.mockapi.io/listMovies")
    .then((res) => res.json())
    .then((resJson) => {
      this.setState({
        isLoading: false,
        refreshing: false,
        dataMovies: resJson
      });
    })
    .catch((error) => {
      console.error(error);
    });
  }

  _onRefresh = () => {
    this._refreshDataFromServer();
  }

  _keyExtractor = (item, index) => item.id;

  _renderItem = ({item}) => (
    <FlatListItem item={item} navigation={this.props.navigation} />
  )

  _onPressAdd = () => {
    this.refs.addModal.showAddModal();
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
      <View style={{flex: 1}}>
        <View 
          style={{
            height: 50,
            flexDirection: 'row',
            backgroundColor:'mediumseagreen',
            justifyContent:'flex-end',
            alignItems: 'center',
            borderBottomColor: 'rgba(255,255,255,0.4)',
            borderBottomWidth: 1
          }}>

          <TouchableOpacity style={{marginRight: 20}} onPress={this._onPressAdd}>
            <Ionicons 
              name="ios-add-circle" 
              size={30} 
              color={'white'}
            ></Ionicons>
          </TouchableOpacity>
        </View>

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
       <AddModal ref={'addModal'} parentFlatlist={this}></AddModal>
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
