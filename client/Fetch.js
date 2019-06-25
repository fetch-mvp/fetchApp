import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import Login from './components/Login/Login';
import Main from './components/Main/Main';

export default class Fetch extends React.Component {
  constructor(){
    super()
    this.state={
      login: false,
      user: {}
    }
  }

  handleLogin = (user) => {
    this.setState({login:true, user})
  }

  render(){
    const statusBar = (Platform.OS === 'ios') && <View style={styles.statusBar}></View>
    return (
      <View style={styles.container}>
        {statusBar}
        {
          (!this.state.login)
          ? <Login handleLogin={this.handleLogin}/>
          : <Main user={this.state.user}/>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusBar: {
    backgroundColor: '#FFCE00',
    height: 20
  }
})
