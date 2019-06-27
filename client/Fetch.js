import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

import Login from './components/Login/Login';
import Main from './components/Main/Main';


export default class Fetch extends React.Component {
  constructor(props){
    super(props)
    this.state={
      login: false,
      user: {},
    }
    this.getCurrentMatches = this.getCurrentMatches.bind(this);
  }


  handleLogin = (user) => {
    this.setState({login:true, user})
  }

  getCurrentMatches() {
    let id = this.props.user._id
    let that = this;

    axios
      .get(`http://localhost:3000/api/gabi/getall`)
      .then(res => {
        let currentMatches = res.data.filter(x => (x._id === id ))[0].matches; 
        let matchedUsers = res.data.filter(x => currentMatches.includes(x.id));
        
        this.setState({
          matches: matchedUsers
        })
      })
      .catch(err => console.log(err))
  }

  render(){

    return (
      <View style={{height: '100%'}}>
        {
          (!this.state.login)
          ? <Login handleLogin={this.handleLogin}/>
          : <Main user={this.state.user} currentMatches={this.state.getCurrentMatches}/>
        }
      </View>
    );
  }
}
