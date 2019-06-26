import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
// import ImagePicker from 'react-native-image-picker';
var ImagePicker = require('react-native-image-picker');

export default class Bio extends React.Component {
  constructor() {
    super();
    this.state = {
      photo: null
    };
  }
  handleChoosePhoto = () => {
    const options = {
      noData: true
    };
    ImagePicker.launchImageLibrary(options, response => {
      console.log(response);
      if (response.uri) {
        this.setState({ photo: response });
      }
    });
  };

  render() {
    console.log(this.props.user);
    const { photo } = this.state;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button title="Choose Photo" onPress={this.handleChoosePhoto} />
      </View>
    );
  }
}

// {photo && (
//   <Image
//     source={{ uri: photo.uri }}
//     style={{ width: 300, height: 300 }}
//   />
// )}
