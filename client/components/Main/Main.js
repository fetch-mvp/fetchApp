import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Nav from './Nav/Nav';
import Content from './Content/Content';

export default class Main extends React.Component {
  constructor(){
    super()
    this.state={
      user: {},
      route: 'swipe', //'setting', 'bio', 'swipe', 'detail', 'match', 'chat'
      interestedDog: {}
    }
    this.changeRoute = this.changeRoute.bind(this);
    this.changeInterestedDog = this.changeInterestedDog.bind(this);  
  }

  changeRoute(route) {
    this.setState({route}); 
  }

  changeInterestedDog(interestedDog){
    this.setState({interestedDog}); 
  }

  render(){
    console.log("Main component : ", this.props.user)
    return (
      <View>
        <Nav />
        <Content interestedDog = {this.state.interestedDog} changeInterestedDog = {this.changeInterestedDog} changeRoute = {this.changeRoute} route={this.state.route} user={this.props.user}/>
      </View>
    );
  }
}
