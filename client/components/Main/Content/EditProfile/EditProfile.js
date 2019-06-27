import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      description: '',
      images: []
    };
  }

  render() {
    return (
      <View>
        <Text>Edit Profile</Text>
      </View>
    );
  }
}

//   <TextInput
// placeholder="Edit Name"
// onChangeText={text =>
//   this.setState({
//     username: text
//   })
// }
// />

// <TextInput
// placeholder="description"
// onChangeText={text => {
//   this.setState({
//     description: text
//   });
// }}
// />
