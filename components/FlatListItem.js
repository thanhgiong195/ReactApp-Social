import React, { Component } from 'react'
import {Image, Text, View, Alert} from 'react-native';
import Swipeout from 'react-native-swipeout';

export default class FlatListItem extends Component {
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
              'Are you sure you want to delete it?',
              [
                {text: 'No', onPress: () => console.log('Cancel pressed'), style: 'cancel'},
                {text: 'Yes', onPress: () => {
                    //action here
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
            <Text style={{color: 'white'}}>Title: {this.props.item.title}</Text>
            <Text style={{color: 'white'}}>Release year: {this.props.item.releaseYear}</Text>
          </View>
        </View>
      </Swipeout>
    )
  }
}
