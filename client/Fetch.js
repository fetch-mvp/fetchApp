import React from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';
import Login from './components/Login/Login';
import Main from './components/Main/Main';


export default class Fetch extends React.Component {
  constructor(props){
    super(props)
    this.state={
      login: false,
      user: {}, 
      matches: []
    };
    this.getAllMatches = this.getAllMatches.bind(this);
  }

  handleLogin = user => {
    this.setState({ login: true, user },
      () => this.getAllMatches());
  };

  getAllMatches() {
    let arr = [];
    axios.get('http://localhost:3000/api/gabi/getall')
      .then(data => {
        let usermatches = this.state.user.matches;
        let allusers = data.data

        for (let i = 0; i < allusers.length; i++) {
          for (let j = 0; j < usermatches.length; j++) {
            if (allusers[i].id === usermatches[j] && arr.length <= usermatches.length) {
              arr.push(allusers[i])
            }
          }
        }
      })
      .then(() => this.setState({
        matches: arr
      }))
      .catch(err => console.error(err))
  }

  render(){
    
    return (
      <View style={{height: '100%'}}>
        {
          (!this.state.login)
          ? <Login handleLogin={this.handleLogin}/>
          : <Main user={this.state.user} matches={this.state.matches}/>
        }
      </View>
    );
  }
}
