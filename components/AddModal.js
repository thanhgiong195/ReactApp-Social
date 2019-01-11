import React, { Component } from 'react';
import {StyleSheet, Dimensions, Platform, TouchableOpacity, Text, View, TextInput} from 'react-native';
import Modal from 'react-native-modal';
import Button from 'react-native-button';

var screen = Dimensions.get('window');

export default class AddModal extends Component {

  state = {
    modalVisible: false,
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
          backgroundColor: 'rgba(255,255,255,0.9)',
          shadowRadius: 10,
          height: 250,
          borderRadius: Platform.OS === 'ios' ? 30 : 0
        }}>
        <Text>Add a new movie</Text>
        <TextInput
          style={styles.textInput}
          keyboardType='email-address'
          placeholder="Enter title movie"
        >
        </TextInput>
        <TouchableOpacity
          onPress={() => this.setState({ modalVisible: false })}>
          <Text>Hide Modal</Text>
        </TouchableOpacity>
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