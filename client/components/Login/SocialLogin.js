import React from 'react';
import axios from 'axios';
import { ImageBackground, Button, StyleSheet, Text, View } from 'react-native';

import { Font } from 'expo';

import {auth} from '../../firebase'

// import firebase from 'firebase/app';
// import 'firebase/auth';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

let corgi = 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'

// firebase.initializeApp({
//   apiKey: "AIzaSyApvedfJSIl_xwbm9s7NMbgljk7m3TazFg",
//   authDomain: "fetchmvp.firebaseapp.com",
// })

export default class Login extends React.Component {
  constructor(props){
    super(props)
    this.state={
      firebaseUser: null,
      isSignedIn: false
    };
  }

  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      auth.GoogleAuthProvider.PROVIDER_ID,
      auth.FacebookAuthProvider.PROVIDER_ID,
      auth.GithubAuthProvider.PROVIDER_ID,
      auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => false
    }
  }

  randomLogin = () => {
    let randomUser = Math.floor(Math.random()*20)
    axios(`http://localhost:3000/api/james/?id=${randomUser}`)
      .then(data => this.props.handleLogin({data: data.data}))
      .catch(e => console.log(e));    
  }

  componentDidMount = () => {
    //Download fonts
    Font.loadAsync({'Lobster': require('./Lobster-Regular.ttf')})

    //Connect with Firebase Auth
    auth().onAuthStateChanged( user => {
      this.setState({ isSignedIn: !!user, firebaseUser: user }, ()=> {
        if (this.state.isSignedIn) {
          this.handleSubmit()
        }
      })
    })
  }

  handleSubmit = () => {
    let { displayName, email } = this.state.firebaseUser
    let editedName = displayName.split(" ")[0]
    axios.post('http://localhost:3000/api/james/firebaseAuth', {
      editedName, 
      email
    })
    .then(response => {
      if (response.data.system === 'login success') {
        this.props.handleLogin({data: response.data.docs})
      } else {
        console.log("login fail")
      }
    })
    .catch(e=> console.log("login fail"))
  }


  render() {
    return (
    <ImageBackground source={{uri: corgi}} style={styles.loginPageBackGround}>
      <View style={styles.loginPageBackGround}>
          <View style={styles.loginLogo}>
            <Text style={styles.loginTitle}>Fetch</Text>
          </View>
          <View style={styles.loginButton}>

          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={auth()}
          />

          <View style={{margin: 20}}></View>
          <Button 
              onPress={() => this.randomLogin()}
              title="Random Login"
            />
          </View>
      </View>
    </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  loginPageBackGround: {
    backgroundImage: "linear-gradient(0deg, rgba(62, 193, 225, 0.5) 0%, rgba(42, 245, 152, 0.8) 100%)",
    width: '100%', 
    height: '100%',
    alignItems: 'center'
  },
  loginLogo: {
    marginTop: 50,
    height:200,
    width:200,
    borderRadius: 100,
    borderStyle: 'solid',
    borderColor: "white",
    borderWidth: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginTitle: {
    fontSize: 80,
    fontFamily: 'Lobster',
    fontWeight: '700',
    color: 'white'
  },
  loginButton: {
    flex: 1,
    justifyContent: 'center',
    height: '100%',
    width: '80%'
  }
})

