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
      route: 'match', //'setting', 'bio', 'swipe', 'detail', 'match', 'chat'
      interestedDog: {},
<<<<<<< HEAD
=======
      userinfo: [],
      allusers: [],
      matches: [],
      queue: []
>>>>>>> 158e8232f3951d9b0705c9f9fbce1095420e6a7e
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
<<<<<<< HEAD
        <Content matches={this.props.matches} interestedDog = {this.state.interestedDog} changeInterestedDog = {this.changeInterestedDog} changeRoute = {this.changeRoute} route={this.state.route} user={this.props.user}/>
=======
        <Content matches = {this.props.matches} queue = {this.state.queue} interestedDog = {this.state.interestedDog} changeInterestedDog = {this.changeInterestedDog} changeRoute = {this.changeRoute} route={this.state.route} user={this.props.user}/>
>>>>>>> 158e8232f3951d9b0705c9f9fbce1095420e6a7e
      </View>
    );
  }
}
