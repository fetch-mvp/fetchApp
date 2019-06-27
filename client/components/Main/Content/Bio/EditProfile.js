import React, { Component } from 'react';
import {
  Modal,
  Text,
  TouchableHighlight,
  View,
  Alert,
  StyleSheet,
  Button
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

export default class EditProfile extends Component {
  state = {
    modalVisible: true,
    photo: null
  };

  componentDidMount() {
    this.getPermissionAsync();
  }

  getPermissionAsync = async () => {
    // if (Constants.Platform.OS) {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
    }
    // }
  };

  getPermissionCameraAsync = async () => {
    // if (Constants.Platform.OS) {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
    }
    // }
  };

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3]
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ photo: result.uri });
    }
  };

  _takePicture = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3]
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ photo: result.uri });
    }
  };

  setModalVisible = visible => {
    this.setState({ modalVisible: visible });
  };

  render() {
    const { photo } = this.state;
    return (
      <View style={{ marginTop: 22 }}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}
        >
          <View style={{ marginTop: 22 }}>
            <View>
              <Text>Update Profile</Text>

              <Text style={styles.test}>Update</Text>
            </View>
            <View>
              {photo && (
                <Image
                  source={{ uri: photo.uri }}
                  style={{ width: 300, height: 300 }}
                />
              )}
              <Button title="Choose Photo" onPress={this._pickImage} />
              <Button
                title="Take a picture"
                onPress={() => {
                  this._takePicture();
                  this.getPermissionCameraAsync();
                }}
              />
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  test: {
    alignSelf: 'flex-end',
    paddingTop: 500
  }
});

//    <TouchableHighlight
//     onPress={() => {
//       this.setModalVisible(!this.state.modalVisible);
//     }}
//   >
// </TouchableHighlight>
