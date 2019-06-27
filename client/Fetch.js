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
      allusers: [],
    }
  }

  handleLogin = (user) => {
    this.setState({login:true, user},
      () => this.getAllUsers())
  }

  getAllUsers = () => {
    axios.get('http://localhost:3000/api/gabi/getall')
      .then(data => this.setState({
        allusers: data.data
      }))
      .catch(err => console.error(err))
  }

  render(){
    
    return (
      <View style={{height: '100%'}}>
        {
          (!this.state.login)
          ? <Login handleLogin={this.handleLogin}/>
          : <Main user={this.state.user} allusers={this.state.allusers}/>
        }
      </View>
    );
  }
}
