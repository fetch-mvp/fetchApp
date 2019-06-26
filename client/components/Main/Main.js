import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Nav from './Nav/Nav';
import Content from './Content/Content';

export default class Main extends React.Component {
  constructor(props){
    super(props)
    this.state={
      user: {},
      route: 'match', //'setting', 'bio', 'swipe', 'detail', 'match', 'chat'
      userinfo: [],
      allusers: [],
      matches: [],
    }
  }

  render(){
    // console.log("Main component : ", this.props.user)
    return (
      <View >
        {/* <Nav /> */}
        <Content route={this.state.route} user={this.props.user}/>
      </View>
    );
  }
}
