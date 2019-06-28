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
      matches: [],
      newUser: false,
    }
    this.getCurrentMatches = this.getCurrentMatches.bind(this);
  }


  handleLogin = data => {
    this.setState({ login: true, user: data.data, newUser: data.new});
  }

  getCurrentMatches() {
    let id = this.state.user._id
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
          : <Main newnewUser={this.state.newUser} user={this.state.user} currentMatches={this.getCurrentMatches} matches={this.state.matches}/>
        }
      </View>
    );
  }
}



