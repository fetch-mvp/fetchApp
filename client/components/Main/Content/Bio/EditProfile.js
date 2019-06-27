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
  Platform
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import axios from 'axios';

const createFormData = (photo, body) => {
  const data = new FormData();

  data.append('photo', {
    // name: photo.fileName,
    // type: photo.type,
    uri:
      Platform.OS === 'android' ? photo.uri : photo.uri.replace('file://', '')
  });

  Object.keys(body).forEach(key => {
    data.append(key, body[key]);
  });

  return data;
};

export default class EditProfile extends Component {
  state = {
    modalVisible: true,
    photo: null,
    images: [],
    showPhoto: false
  };

  componentDidMount() {
    this.getPermissionAsync();
    // console.log('WENDYYYYYS COMPONNET', this.props.user);
  }

  handleUploadPhoto = () => {
    axios
      .post('/api/upload', {
        images: createFormData(photo, { id: this.props.user.id })
      })
      .then(() => {
        alert('Successfully Posted');
        this.setState({ photo: null });
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
    console.log('******************', this.state.photo);
    // console.log(result);

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
    // this.setState({ showPhoto: true });

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

              <Text style={styles.test}>Update</Text>
            </View>
            <View>
              {this.state.showPhoto && (
                <Image
                  source={{ url: photo.uri }}
                  // style={{ width: 300, height: 500, backgroundColor: 'red' }}
                />
              )}
              <Button
                title="Choose Photo"
                onPress={() => {
                  this._pickImage();
                  this.handleUploadPhoto();
                }}
              />
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
