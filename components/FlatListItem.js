import React, { Component } from 'react'
import {Image, Text, View, Alert, TouchableWithoutFeedback } from 'react-native'
import Swipeout from 'react-native-swipeout'

export default class FlatListItem extends Component {

  async deleteMovie(params) {
    try {
      let response = await fetch("http://5c0644c8c16e120013947983.mockapi.io/listMovies/", {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
      });
      console.log('runhere');
      let responseJson = await response.json();
      return responseJson.result;

    } catch (error) {
      console.error('Error');
    }
  }

  render() {
    const swipeSettings = {
      autoClose: true,
      rowId: this.props.item.id,
      sectionId: 1,

      onClose: (secId, rowId, direction) => {
        if(this.state.activeRowKey != null) {
          this.setState({ activeRowKey: null });
        }
      },

      onOpen: (secId, rowId, direction) => {
        this.setState({ activeRowKey: this.props.item.id });
      },
      right: [{
        onPress: () => {
          Alert.alert (
            'Alert' + this.props.item.id ,
            'Are you sure you want to delete it?',
            [
              {text: 'No', onPress: () => console.log('Cancel pressed'), style: 'cancel'},
              {text: 'Yes', onPress: () => {
                // this.deleteMovie(this.props.item.id)
              }},
            ],
            {cancelable: true}
          );
        },
        text: 'Delete', type: 'delete'
      }]
    };

    return (
      <Swipeout {...swipeSettings}>
        <TouchableWithoutFeedback 
          onPress={() => this.props.navigation.navigate('DetailsItem', {
            title: this.props.item.title,
            img_url: this.props.item.image,
            releaseYear: this.props.item.releaseYear
          })}>
          <View 
            style={{
              flex:1,
              flexDirection:'row',
              marginBottom: 1,
              padding: 9, 
              backgroundColor:'mediumseagreen'
            }}
          >
            <Image 
              style={{width: 60, height: 60}} 
              source={{uri: this.props.item.image}} 
            />
            <View style={{flex: 1,flexDirection:'column', marginLeft: 10}}>
              <Text style={{color: 'white',fontWeight: 'bold',fontSize: 16}}>{this.props.item.title}</Text>
              <Text style={{color: 'white'}}>{this.props.item.releaseYear}</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Swipeout>
    )
  }
}
