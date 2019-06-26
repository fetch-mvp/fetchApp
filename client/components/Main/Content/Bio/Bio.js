import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Bio extends React.Component {
  constructor(props){
    super(props)
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
