import React from 'react';
import axios from 'axios';
import { ImageBackground, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import Constants from 'expo-constants';

import Register from './Register';

let corgi = 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
let second = "https://jamesfetch.s3.amazonaws.com/1561681253902"

export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null,
      page: 'login', //'login' or 'register'
      userEmail: '',
      userPassword: '',
      loginError: false
    };
  }

  randomLogin() {
    let randomUser = Math.floor(Math.random() * 20)
    axios(`http://localhost:3000/api/james/?id=${randomUser}`)
      .then(data => this.props.handleLogin({ new: false, data: data.data }))
      .catch(e => console.log(e));
  }

  handleSubmit() {
    axios.post('http://localhost:3000/api/james/login', {
      userEmail: this.state.userEmail,
      userPassword: this.state.userPassword
    })
      .then((response) => {
        if (response.data.system === 'login success') {
          this.props.handleLogin({ new: false, data: response.data.docs })
        } else {
          this.setState({ userPassword: '', loginError: true })
        }
      })
      .catch((error) => this.setState({ userPassword: '', loginError: true }))
  }

  viewChange = (view) => {
    this.setState({ page: view })
  }

  viewRendering() {
    let { page } = this.state
    if (page === 'login') {
      return (
        <View style={styles.loginPageBackGround}>
          <View style={styles.loginLogo}>
            <Text style={styles.loginTitle}>Fetch</Text>
          </View>
          <View style={styles.loginButton}>
            <TextInput
              value={this.state.userEmail}
              style={{ height: 40, backgroundColor: 'white', marginBottom: 10 }}
              placeholder="  user email"
              onChangeText={(userEmail) => this.setState({ userEmail })}
            />
            <TextInput
              value={this.state.userPassword}
              style={{ height: 40, backgroundColor: 'white', marginBottom: 10 }}
              placeholder="  user password"
              onChangeText={(userPassword) => this.setState({ userPassword })}
            />
            {
              (this.state.loginError) &&
              <View><Text style={{ color: 'red' }}>Login Error!!!</Text></View>
            }
            <Button
              onPress={() => this.handleSubmit()}
              title="Login"
            />
            <View style={{ margin: 5 }}></View>
            <Button
              onPress={() => this.viewChange('register')}
              title="Register"
            />
            <View style={{ margin: 20 }}></View>
            <Button
              onPress={() => this.randomLogin()}
              title="Random Login"
            />
          </View>
        </View>
      )
    } else {
      return <Register viewChange={this.viewChange} handleLogin={this.props.handleLogin} />
    }
  }


  render() {
    return (
      <ImageBackground source={{ uri: corgi }} style={styles.loginPageBackGround}>
        {
          this.viewRendering()
        }
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  loginPageBackGround: {
    width: '100%',
    height: '100%',
    alignItems: 'center'
  },
  loginLogo: {
    marginTop: 150
  },
  loginTitle: {
    fontSize: 50,
    fontFamily: 'Verdana',
    fontWeight: '700'
  },
  loginButton: {
    flex: 1,
    justifyContent: 'center',
    height: '100%',
    width: '80%'
  }
})