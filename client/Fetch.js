import React from 'react';
import { Text, View } from 'react-native';

import Login from './components/Login/Login';
import Main from './components/Main/Main';

export default class Fetch extends React.Component {
  constructor(props){
    super(props)
    this.state={
      login: false,
      user: {}
    };
  }

  handleLogin = user => {
    this.setState({ login: true, user });
  };

  render(){
    return (
      <View style={{height: '100%'}}>
        {
          (!this.state.login)
          ? <Login handleLogin={this.handleLogin}/>
          : <Main user={this.state.user}/>
        }
      </View>
    );
  }
}
