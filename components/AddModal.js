import React, { Component } from 'react';
import {StyleSheet, Platform, Text, View, TextInput} from 'react-native';
import Modal from 'react-native-modal';
import Button from 'react-native-button';
import {insertNewFromServer} from './networking/Server';
import DatePicker from 'react-native-datepicker'

export default class AddModal extends Component {

  constructor (props) {
    super(props);
    this.state = {
      modalVisible: false,
      newMovieName: '',
      newMovieImage: '' || 'https://s3.amazonaws.com/uifaces/faces/twitter/lmjabreu/128.jpg',
      newMovieYear: '' || '2016-05-15'
    }
  }

  showAddModal = () => {
    this.setState({ modalVisible: !this.state.modalVisible });
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
          backgroundColor: 'rgba(255,255,255,1)',
          shadowRadius: 10,
          height: 300,
          // padding: 30,
          borderRadius: Platform.OS === 'ios' ? 30 : 20
        }}>

        <Text style={{fontSize: 18,fontWeight:'bold',padding:10}}>Add a new item</Text>

        <TextInput
          style={styles.textInput}
          placeholder="Enter title movie"
          onChangeText={(text) => this.setState({ newMovieName: text })}
          value={this.state.newMovieName}
        >
        </TextInput>

        <DatePicker
          style={{width: 200}}
          date={this.state.newMovieYear}
          mode="date"
          placeholder="Select date"
          format="DD-MM-YYYY"
          minDate="01-01-2000"
          maxDate="01-01-2020"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36
            }
          }}
          onDateChange={(date) => {this.setState({newMovieYear: date})}}
        />

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

              insertNewFromServer(newMovie);
              this.setState({ modalVisible: false, newMovieName: '', newMovieYear: '01-01-2019' })
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