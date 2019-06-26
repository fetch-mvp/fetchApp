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
    }
    this.getAllUsers = this.getAllUsers.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin = (user) => {
    this.setState({login:true, user},
      () => this.getAllUsers())
  }

  getAllUsers() {
    let arr = [];
    axios.get('http://localhost:3000/api/gabi/getall')
      .then(data => {
        let userinfo = data.data;
        // console.log(userinfo)
        let usermatches = this.state.user.matches;

        for (let i = 0; i < userinfo.length; i++) {
          for (let j = 0; j < usermatches.length; j++) {
            if (userinfo[i].id === usermatches[j] && arr.length !== usermatches.length) {
              arr.push(userinfo[i])
            }
          }
        }
        this.setState({
          matches: arr
        })
      })
      .catch(err => console.error(err))
  }
  


  render(){
    const statusBar = (Platform.OS === 'ios') && <View style={styles.statusBar}></View>
    return (
      <View style={styles.container}>
        {statusBar}
        {
          (!this.state.login)
          ? <Login handleLogin={this.handleLogin}/>
          : <Main user={this.state.user} matches={this.state.matches}/>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    // justifyContent: 'center',
    // paddingTop:100
  },
  statusBar: {
    height: 20
  }
})
