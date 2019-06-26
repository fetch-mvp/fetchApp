import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Nav from './Nav/Nav';
import Content from './Content/Content';

export default class Main extends React.Component {
  constructor(props){
    super(props)
    this.state={
      user: {},
      route: 'bio' //'setting', 'bio', 'swipe', 'detail', 'match', 'chat'
    }
  }

  handleRouteChange = (route) => {
    this.setState({route})
  }

  render(){
    console.log("Main component : ", this.props.user)
    return (
      <View style={{height: '100%'}}>
        <Nav route={this.state.route} handleRouteChange={this.handleRouteChange}/>
        <Content route={this.state.route} user={this.props.user}/>
      </View>
    );
  }
}
