import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import Nav from './Nav/Nav';
import Content from './Content/Content';


export default class Main extends React.Component {
  constructor(props){
    super(props)
    this.state={
      user: {},
      route: 'match', //'setting', 'bio', 'swipe', 'detail', 'match', 'chat'
    }
  }

  render(){
    // console.log("Main component : ", this.props.user)
    // console.log('matches',this.props.user.matches)
    return (
      <View >
        {/* <Nav /> */}
        <Content route={this.state.route} user={this.props.user} matches={this.props.matches}/>
      </View>
    );
  }
}
