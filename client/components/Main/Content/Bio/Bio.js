import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Bio extends React.Component {
  constructor(){
    super()
    this.state={}
  }

  render(){
    console.log(this.props.user)
    return (
      <View>
        <Text>Bio</Text>
      </View>
    );
  }
}
