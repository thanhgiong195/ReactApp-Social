import React, {Component} from 'react';
import { TouchableOpacity, StyleSheet, ActivityIndicator, View, FlatList, RefreshControl } from 'react-native';
import {COLOR_PINK_LIGHT, COLOR_PINK_MEDIUM} from './myColor';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AddModal from './AddModal'
import EditModal from './EditModal'
import FlatListItem from './FlatListItem'
import { getDataFromServer } from './networking/Server';
import { Item, Input, Header, Icon } from 'native-base';

export default class ListData extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      refreshing: false,
      dataMovies: [],
      activeRowKey: null
    }
  }

  _refreshDataFromServer = () => {
    this.setState({ refreshing: true });

    getDataFromServer().then((movie) => {
      this.setState({
        isLoading: false,
        refreshing: false,
        dataMovies: movie
      });
    })
  }

  componentDidMount() {
    this._refreshDataFromServer();
  }

  _keyExtractor = (item, index) => item.id;

  _renderItem = ({item}) => (
    <FlatListItem item={item} navigation={this.props.navigation} parentFlat={this} />
  )

  _onPressAdd = () => {
    this.refs.addModal.showAddModal();
  }

  _onPressEdit = () => {
    this.refs.editModal.showEditModal();
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
        <Header searchBar rounded style={{height: 45}}>
          <Item style={{height: 30}}>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="ios-people" />
          </Item>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity style={{marginRight: 20}} onPress={this._onPressAdd}>
              <Ionicons 
                name="md-add-circle" 
                size={30} 
                color={'white'}
              ></Ionicons>
            </TouchableOpacity>
          </View>
        </Header>

        <FlatList 
          data={this.state.dataMovies}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          refreshControl={
            <RefreshControl 
              refreshing={this.state.refreshing}
              onRefresh={this._refreshDataFromServer}
            />
          }
        >
        </FlatList>
       <AddModal ref={'addModal'} parentFlatlist={this}></AddModal>
       <EditModal ref={'editModal'} parentFlatlist={this}></EditModal>
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
