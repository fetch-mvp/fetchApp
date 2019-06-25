import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Nav from './Nav/Nav';
import Content from './Content/Content';

export default class Main extends React.Component {
  constructor(){
    super()
    this.state={
      user: {},
      route: 'bio' //'setting', 'bio', 'swipe', 'detail', 'match', 'chat'
    }
  }

  render(){
    console.log("Main component : ", this.props.user)
    return (
      <View>
        <Nav />
        <Content route={this.state.route} user={this.props.user}/>
      </View>
    );
  }
}
