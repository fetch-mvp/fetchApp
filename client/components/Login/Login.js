import React from 'react';
import axios from 'axios';
import { Button, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

export default class Login extends React.Component {
  constructor(){
    super()
    this.state={
      user: null
    }
  }

  componentDidMount(){
    let randomUser = 1;
    axios(`http://localhost:3000/api/james/?id=${randomUser}`)
    .then(data=> this.setState({user: data.data}))
    .catch(e=> console.log(e))
  }

  render(){
    return (
      <View>
        <View style={{backgroundColor: 'white'}}>
        <Text>   </Text>
        <Text>   </Text>
        <Text>   </Text>
        <Text>   </Text>
        <Text>   </Text>
        <Text>   </Text>
        <Text>   </Text>
        <Text>   </Text>
        <Text>   </Text>
        <Text>   </Text>
        <Text>   </Text>
        <Text>   </Text>
        <Button onPress={() => this.props.handleLogin(this.state.user)}
            title="Login"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container2: {
    flex: 1,
    paddingTop : Constants.statusBarHeight,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  }
})
