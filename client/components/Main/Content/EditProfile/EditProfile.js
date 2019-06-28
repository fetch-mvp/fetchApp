import React, { Component } from 'react';
import {
  Modal,
  Text,
  View,
  TextInput,
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

  let editedPhotoUri = photo.slice(7);
  console.log(editedPhotoUri);
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
    newUri: '',
    name: 'Name',
    description: 'Description'
  };

  componentDidMount() {
    this.getPermissionAsync();
  }

  setModalVisible = () => {
    this.setState({
      modalVisible: false
    });
  };
  handleUploadPhoto = () => {
    axios
      .post('http://localhost:3000/api/wendy/upload', {
        photo: createFormData(this.state.photo, { _id: this.props.user._id })
      })
      .then(() => {
        alert('Profile Updated');
        // this.setState({ photo: null });
      })
      .catch(err => {
        alert('Profile Updated');
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
    console.log(result.uri);
    this.setState({ photo: result.uri });

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
      <View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible();
          }}
        >
          <View style={styles.container}>
            <View>
              <Text style={styles.profile}>Edit Profile</Text>
            </View>

            <View
              style={{
                paddingTop: 35,
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {photo ? (
                <Image
                  source={{ uri: `${this.state.photo}` }}
                  style={styles.image}
                />
              ) : (
                <Image
                  source={{ uri: `${this.props.user.images[0]}` }}
                  style={styles.image}
                />
              )}
            </View>
            <View style={styles.textContainer}>
              <TextInput
                onChangeText={name => this.setState({ name })}
                value={this.state.name}
                style={styles.name}
                clearButtonMode="always"
                clearTextOnFocus={true}
              />

              <TextInput
                onChangeText={description => this.setState({ description })}
                value={this.state.description}
                style={styles.description}
                clearButtonMode="always"
                multiline={true}
                clearTextOnFocus={true}
              />
            </View>

            <Button
              title="Choose Photo"
              onPress={() => {
                this._pickImage();
              }}
              style={styles.buttons}
            />
            <Button
              title="Take a picture"
              onPress={() => {
                this._takePicture();
                this.getPermissionCameraAsync();
              }}
              style={styles.buttons}
            />
            <Button
              title="Upload"
              onPress={() => {
                this.handleUploadPhoto();
              }}
              style={styles.buttons}
            />
            <View style={styles.buttonContainer}>
              {/* <Button
                title="X"
                onPress={() => this.props.changeRoute('bio')}
                style={styles.xButton}
              /> */}
              <Text
                onPress={() => this.props.changeRoute('bio')}
                style={styles.textBtn}
              >
                X
              </Text>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 260,
    height: 260,
    // margin: 5,
    right: 4,
    borderRadius: 130,
    backgroundColor: '#3EC1E1',
    alignSelf: 'center',
    justifyContent: 'center',
    borderColor: '#FFF',
    borderWidth: 5
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3EC1E1',
    height: 50,
    width: 50,
    borderRadius: 100,
    marginLeft: 300,
    marginTop: 20,
    color: '#FFF',
    fontWeight: 'bold'
  },
  textBtn: {
    color: '#FFF',
    fontWeight: 'bold'
  },
  buttons: {
    width: 20,
    height: 20
  },
  profile: {
    fontSize: 38,
    alignSelf: 'center',
    justifyContent: 'center',
    paddingTop: 60,
    fontWeight: '500',
    fontFamily: 'GillSans',
    color: 'white'
  },
  container: {
    backgroundColor: '#3EC1E1',
    width: 400,
    height: 435
  },

  name: {
    height: 30,
    width: '80%',
    color: 'gray',
    borderColor: '#3EC1E1',
    borderWidth: 2,
    borderBottomColor: '#3EC1E1',
    marginTop: 85,
    marginLeft: 30,
    marginRight: 50,
    paddingLeft: 5,
    paddingTop: 5
  },
  description: {
    height: 50,
    width: '80%',
    color: 'gray',
    borderColor: '#3EC1E1',
    borderWidth: 2,
    borderBottomColor: '#3EC1E1',
    marginTop: 20,
    marginLeft: 30,
    marginRight: 50,
    paddingLeft: 5,
    paddingTop: 0
  },
  textContainer: {
    paddingBottom: 20
  }
  // btnContainer: {}
});

//`${this.state.updatedUri}`
