import React, { Component } from 'react'
import { View, Text, Button,Image } from "react-native";

export default class DetailsItem extends Component {
  render() {
    const { navigation } = this.props;
    const title = navigation.getParam('title', 'NO-ID');
    const img_url = navigation.getParam('img_url');
    const releaseYear = navigation.getParam('releaseYear', 'some default value');
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image 
          style={{width: 200, height: 200}} 
          source={{uri: img_url}} 
        />
        <Text style={{marginTop:30}}>Title: {JSON.stringify(title)}</Text>
        <Text style={{marginTop:20}}>ReleaseYear: {JSON.stringify(releaseYear)}</Text>
        <Button 
          style={{marginTop:40}}
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        {/* <Button title="Go back" onPress={() => this.props.navigation.goBack()} /> */}
      </View>
    )
  }
}
