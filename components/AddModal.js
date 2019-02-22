import React, { Component } from 'react';
import {StyleSheet, Dimensions, Platform, Text, View, TextInput} from 'react-native';
import Modal from 'react-native-modal';
import Button from 'react-native-button';

var screen = Dimensions.get('window');

export default class AddModal extends Component {

  constructor (props) {
    super(props);
    this.state = {
      modalVisible: false,
      newMovieName: '',
      newMovieImage: '' || 'https://s3.amazonaws.com/uifaces/faces/twitter/lmjabreu/128.jpg',
      newMovieYear: '' || '2018-02-14T05:30:29.486Z'
    }
  }

  showAddModal = () => {
    this.setState({ modalVisible: !this.state.modalVisible });
  }

  async insertNewMovie(params) {
    try {
      let response = await fetch("http://5c0644c8c16e120013947983.mockapi.io/listMovies", {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
      });
      let responseJson = await response.json();
      return responseJson.result;
    } catch (error) {
      console.error('Error');
    }
  }

  render() {
    return (
      <Modal
        isVisible={this.state.modalVisible}
        onBackdropPress={() => this.setState({ modalVisible: false })}
      >
        <View style={{
          alignContent:'center',
          justifyContent:'center',
          alignItems: 'center',
          backgroundColor: 'rgba(255,255,255,0.9)',
          shadowRadius: 10,
          height: 250,
          padding: 30,
          borderRadius: Platform.OS === 'ios' ? 30 : 0
        }}>
        <Text style={{fontSize: 18,fontWeight:'bold'}}>Add a new movie</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter title movie"
          onChangeText={(text) => this.setState({ newMovieName: text })}
          value={this.state.newMovieName}
        >
        </TextInput>
        <TextInput
          style={styles.textInput}
          placeholder="Enter year"
          onChangeText={(text) => this.setState({ newMovieYear: text })}
          value={this.state.newMovieYear}
        >
        </TextInput>
        <TextInput
          style={styles.textInput}
          placeholder="Enter url image"
          onChangeText={(text) => this.setState({ newMovieImage: text })}
          value={this.state.newMovieImage}
        >
        </TextInput>
        <View style={{flexDirection:'row'}}>
          <Button
            onPress={() =>  {
              if (this.state.newMovieName.length == 0 || this.state.newMovieImage.length == 0 || this.state.newMovieYear.length == 0 ) {
                alert("You must enter movie's...")
                return;
              }
              const newMovie = {
                title: this.state.newMovieName,
                image: this.state.newMovieImage,
                releaseYear: this.state.newMovieYear
              }

              this.insertNewMovie(newMovie);
              this.setState({ modalVisible: false })

              this.props.parentFlatlist._refreshDataFromServer(); //auto reload
            }}
            style={{padding: 30}}>
            Save
          </Button>

          <Button
            onPress={() => this.setState({ modalVisible: false })}
            style={{padding: 30}}>
            Cancel
          </Button>
        </View>
      </View>
    </Modal>
    )
  }
}

const styles = StyleSheet.create({
  textInput: {
    width: 280,
    height: 45,
    color: '#00000090'
  }
});