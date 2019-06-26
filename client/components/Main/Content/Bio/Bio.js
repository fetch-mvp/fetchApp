import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default class Bio extends React.Component {
  constructor() {
    super();
    this.state = {
      photo: null
    };
  }

  render() {
    console.log(this.props.user);
    const { photo } = this.state;
    return (
      <View>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: `${this.props.user.images[0]}` }}
            style={{ width: 400, height: 350 }}
          />
        </View>
        <View>
          <Text style={styles.textContainer}>
            Name: {this.props.user.userName}
          </Text>
          <Text> Description</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    // alignContent: 'stretch',
    marginTop: 30,
    paddingLeft: 1,
    paddingRight: 1
  },

  textContainer: {
    justifyContent: 'center',
    marginBottom: 50
  }
});

// {photo && (
//   <Image
//     source={{ uri: photo.uri }}
//     style={{ width: 300, height: 300 }}
//   />
// )}
