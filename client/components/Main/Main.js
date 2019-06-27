import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Nav from './Nav/Nav';
import Content from './Content/Content';
import axios from "axios";


export default class Main extends React.Component {
  constructor(props){
    super(props)
    this.state={
      user: {},
      route: 'bio', //'setting', 'bio', 'swipe', 'detail', 'match', 'chat'
      interestedDog: {},
      userinfo: [],
      allusers: [],
      matches: [],
      queue: []
    }
    this.changeRoute = this.changeRoute.bind(this);
    this.changeInterestedDog = this.changeInterestedDog.bind(this);  
  }

  componentDidMount() {
    let that = this; 
    axios
      .get("http://localhost:3000/api/calvin/getAll")
      .then(function(res) {
        that.setState({queue: res.data})
        console.log('this is the state: ', that.state)
      })
      .catch(function(error) {
        console.log(error);
      })
  }

  changeRoute(route) {
    this.setState({route}); 
  }

  changeInterestedDog(interestedDog){
    this.setState({interestedDog}); 
  }

  handleRouteChange = (route) => {
    this.setState({route})
  }

  render(){
  
    return (
      <View style={{height: '100%'}}>
        <Nav route={this.state.route} handleRouteChange={this.handleRouteChange}/>
        <Content matches = {this.props.matches} queue = {this.state.queue} interestedDog = {this.state.interestedDog} changeInterestedDog = {this.changeInterestedDog} changeRoute = {this.changeRoute} route={this.state.route} user={this.props.user}/>
      </View>
    );
  }
}
