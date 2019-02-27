import React, { Component } from 'react';
import {StyleSheet, Dimensions, Platform, Text, View, TextInput} from 'react-native';
import Modal from 'react-native-modal';
import Button from 'react-native-button';
import {updateItem} from './networking/Server';

var screen = Dimensions.get('window');

export default class EditModal extends Component {

  constructor (props) {
    super(props);
    this.state = {
      modalVisible: false,
      id:'',
      editMovieName: '',
      editMovieImage: '',
      editMovieYear: ''
    }
  }

  showEditModal = (editingMovie) => {
    this.setState({ 
      modalVisible: true,
      id: editingMovie.id,
      editMovieName: editingMovie.title,
      editMovieImage: editingMovie.image,
      editMovieYear: editingMovie.releaseYear,
    });
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
        <Text style={{fontSize: 18,fontWeight:'bold',padding:10}}>Edit a movie</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter title movie"
          onChangeText={(text) => this.setState({ editMovieName: text })}
          value={this.state.editMovieName}
        >
        </TextInput>
        <TextInput
          style={styles.textInput}
          placeholder="Enter year"
          onChangeText={(text) => this.setState({ editMovieYear: text })}
          value={this.state.editMovieYear}
        >
        </TextInput>
        <TextInput
          style={styles.textInput}
          placeholder="Enter url image"
          onChangeText={(text) => this.setState({ editMovieImage: text })}
          value={this.state.editMovieImage}
        >
        </TextInput>
        <View style={{flexDirection:'row'}}>
          <Button
            onPress={() =>  {
              if (this.state.editMovieName.length == 0 || this.state.editMovieImage.length == 0 || this.state.editMovieYear.length == 0 ) {
                alert("You must enter movie's...")
                return;
              }
              
              const editMovie = {
                title: this.state.editMovieName,
                image: this.state.editMovieImage,
                releaseYear: this.state.editMovieYear
              }

              updateItem(editMovie,this.state.id);
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