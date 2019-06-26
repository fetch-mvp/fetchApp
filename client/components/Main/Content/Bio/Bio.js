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
      <View style={styles.container}>
        <Image
          source={{ uri: `${this.props.user.images[0]}` }}
          style={{ width: 300, height: 300 }}
        />
        <Text>Name: {this.props.user.userName}</Text>
        <Text> Description</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'blue',
    alignContent: 'stretch',
    // margin: 30,
    paddingLeft: 1,
    paddingRight: 1
  },

  item: {
    // flex: 1,
    // overflow: 'hidden',
    // alignItems: 'center',
    // backgroundColor: 'orange',
    // position: 'relative',
    // margin: 10
  },

  image: {
    // flex: 1
  }
});

// {photo && (
//   <Image
//     source={{ uri: photo.uri }}
//     style={{ width: 300, height: 300 }}
//   />
// )}
