import React from 'react';
import axios from 'axios';
import { ImageBackground, Button, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

let corgi = 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'

export default class Login extends React.Component {
  constructor(props){
    super(props)
    this.state={
      user: null
    }
  }

  componentDidMount(){
    let randomUser = Math.floor(Math.random()*20)
    axios(`http://localhost:3000/api/james/?id=${randomUser}`)
    .then(data=> this.setState({user: data.data}))
    .catch(e=> console.log(e))
  }

  render(){
    return (
    <ImageBackground source={{uri: corgi}} style={{width: '100%', height: '100%'}}>
          <View style={styles.loginButton}>
            <Text style={styles.title}>Fetch</Text>
            <Button 
                onPress={() => this.props.handleLogin(this.state.user)}
                title="Login"
              />
          </View>
    </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 50,
    fontFamily: 'Verdana',
    fontWeight: '700',
    marginBottom: 300,
  },
  loginButton: {
    flex: 1,
    justifyContent: 'center',
    height: '100%',
    width: '100%'
  }
})
