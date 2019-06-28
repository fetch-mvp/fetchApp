import React from 'react';
import axios from 'axios';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default class Register extends React.Component {
  constructor(props){
    super(props)
    this.state={
    	userName: '',
    	userEmail: '',
    	userPassword: '',
    	userPassword2: '',
    	passwordError: false,
    	registerError: false
    }
  }

  handleSubmit(){
  	let { userName, userEmail, userPassword } = this.state
    axios.post('http://localhost:3000/api/james/register', {
    	userName, 
    	userEmail, 
    	userPassword
    })
      .then((response) => {
        if (response.data.system === 'register success') {
        	this.props.handleLogin({new:true, data: response.data.docs})
        } else {
        	this.setState({userName:'', userEmail:'', userPassword:'', userPassword2:'', registerError: true})
        }
      })
      .catch((error) => {
      	this.setState({userName:'', userEmail:'', userPassword:'', userPassword2:'', registerError: true})
      })
  }

  render() {
    return (
    	<View style={styles.registerPageBackGround}>
    		<Text style={styles.registerTitle}>Register</Text>
    		<View style={styles.registerBox}> 
	            <TextInput
	              value={this.state.userName}
	              style={{height: 40, backgroundColor: 'white', marginBottom: 10}}
	              placeholder="  user name"
	              onChangeText={(userName) => this.setState({userName})}
	            />
	            {
	            	(this.state.userName.trim().length > 0 && this.state.userName.trim().length < 2) &&
	            	<View><Text style={{color: 'red'}}>user name must be longer than 1 letter</Text></View>
	            }
	            <TextInput
	              value={this.state.userEmail}
	              style={{height: 40, backgroundColor: 'white', marginBottom: 10}}
	              placeholder="  user email"
	              onChangeText={(userEmail) => this.setState({userEmail})}
	            />
	            {
	            	(this.state.userEmail.trim().length > 0 && this.state.userEmail.trim().length < 5) &&
	            	<View><Text style={{color: 'red'}}>user email must be longer than 5 letters</Text></View>
	            }
	            <TextInput
	              value={this.state.userPassword}
	              style={{height: 40, backgroundColor: 'white', marginBottom: 10}}
	              placeholder="  user password"
	              onChangeText={(userPassword) => this.setState({userPassword})}
	            />
	            {
	            	(this.state.userPassword.trim().length > 0 && this.state.userPassword.trim().length < 5) &&
	            	<View><Text style={{color: 'red'}}>user password must be longer than 5 letters</Text></View>
	            }
	            <TextInput
	              value={this.state.userPassword2}
	              style={{height: 40, backgroundColor: 'white', marginBottom: 10}}
	              placeholder="  user password confirm"
	              onChangeText={(userPassword2) => this.setState({userPassword2})}
	            />
				{
					(this.state.userPassword !== this.state.userPassword2 && this.state.userPassword2.length > 0) &&
					<View><Text style={{color: 'red'}}>passwords do not match</Text></View>
				}
				{
					(this.state.registerError) &&
					<View><Text style={{color: 'red'}}>Register Error! Try again!</Text></View>
				}
	            <Button 
	                onPress={() => this.handleSubmit()}
	                title="Submit"
	              />
	            <View style={{margin: 5}}></View>
	            <Button 
	                onPress={() => this.props.viewChange('login')}
	                title="Already have an account?"
	              />
            </View>
    	</View>
    );
  }
}

const styles = StyleSheet.create({
  registerPageBackGround: {
    width: '100%', 
    height: '100%',
    alignItems: 'center'
  },
  registerTitle: {
  	marginTop: 150,
    fontSize: 50,
    fontFamily: 'Verdana',
    fontWeight: '700'
  },
  registerBox: {
    flex: 1,
    justifyContent: 'center',
    height: '100%',
    width: '80%'
  }
})

