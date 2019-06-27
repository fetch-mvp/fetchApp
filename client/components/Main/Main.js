import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Nav from './Nav/Nav';
import Content from './Content/Content';
import axios from "axios";


export default class Main extends React.Component {
  constructor(props){
    super(props)
    this.state={
      user: {}, // Calvin: looks like it doesn't do anything?
      route: 'bio', //'setting', 'bio', 'swipe', 'detail', 'match', 'chat'
      interestedDog: {},
      userinfo: [],
      allusers: [],
      matches: [],
      queue: []
    }
    this.changeRoute = this.changeRoute.bind(this);
    this.changeInterestedDog = this.changeInterestedDog.bind(this);  
    this.refreshQueue = this.refreshQueue.bind(this);
  }

  componentDidMount() {
    this.refreshQueue();
  }

  refreshQueue(){
    let that = this; 
    axios
      .get("http://localhost:3000/api/calvin/getAll")
      .then(function(res) {
        // Filter out the logged in user and swipped users
        let currUser = res.data.filter(x=>(x._id===that.props.user._id))[0];
        that.setState({queue: res.data.filter(x=>(x._id!==that.props.user._id && (!currUser.swiped.includes(x._id))))})

        console.log('most updated curr user: ', res.data.filter(x=>(x._id===that.props.user._id))[0])
        // todo: also filter the gender and the distance.. (need an API to calculate distance)
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
        <Content refreshQueue={this.refreshQueue} allusers = {this.props.allusers} queue = {this.state.queue} interestedDog = {this.state.interestedDog} changeInterestedDog = {this.changeInterestedDog} changeRoute = {this.changeRoute} route={this.state.route} user={this.props.user}/>
      </View>
    );
  }
}
