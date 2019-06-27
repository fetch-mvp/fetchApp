import React, { Component } from 'react';
import {
  Modal,
  Text,
  TouchableHighlight,
  View,
  Alert,
  StyleSheet,
  Button,
  Image,
  Platform,
  ImageBackground
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import axios from 'axios';

const createFormData = (photo, body) => {
  const data = new FormData();

  let editedPhotoUri = photo.slice(7);

  data.append('photo', {
    name: photo.fileName,
    type: photo.type,
    uri: Platform.OS === 'android' ? photo : editedPhotoUri
  });

  Object.keys(body).forEach(key => {
    data.append(key, body[key]);
  });
  console.log(data);
  return data;
};

export default class EditProfile extends Component {
  state = {
    modalVisible: true,
    photo: null,
    images: [],
    showPhoto: false,
    updatedUri: null,
    newUri: ''
  };

  componentDidMount() {
    this.getPermissionAsync();
  }

  handleUploadPhoto = () => {
    axios
      .post('http://localhost:3000/api/wendy/upload', {
        photo: createFormData(this.state.photo, { _id: this.props.user._id })
      })
      .then(() => {
        alert('Successfully Posted');
        this.setState({ photo: null }); // should set state to new uri
      })
      .catch(err => {
        alert('Failed to upload');
      });
  };

  getPermissionAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
    }
  };

  getPermissionCameraAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
    }
  };

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3]
    });
    let uri = result.uri.slice(7);
    this.setState({ updatedUri: uri, photo: result.uri });

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

    if (!result.cancelled) {
      this.setState({ photo: result.uri });
    }
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
            </View>
            <View
              style={
                {
                  // flex: 1,
                  // paddingTop: 400,
                  // alignItems: 'center',
                  // justifyContent: 'center'
                }
              }
            >
              <View>
                {photo ? (
                  <Image
                    source={{ uri: `${this.state.updatedUri}` }}
                    style={{ width: 100, height: 100 }}
                  />
                ) : (
                  <Image
                    source={{ uri: `${this.props.user.images[0]}` }}
                    style={{ width: 100, height: 100 }}
                  />
                )}
              </View>
              <Button
                title="Choose Photo"
                onPress={() => {
                  this._pickImage();
                }}
              />
              <Button
                title="Take a picture"
                onPress={() => {
                  this._takePicture();
                  this.getPermissionCameraAsync();
                }}
              />
              <Button
                title="Upload"
                onPress={() => {
                  this.handleUploadPhoto();
                }}
              />
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   test: {
//     alignSelf: 'flex-end',
//     paddingTop: 500
//   }
// });

//    <TouchableHighlight
//     onPress={() => {
//       this.setModalVisible(!this.state.modalVisible);
//     }}
//   >
// </TouchableHighlight>