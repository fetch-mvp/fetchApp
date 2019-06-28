import React from 'react';
import { TextInput , StyleSheet, Text, View } from 'react-native';
import {db} from '../../../../firebase';

export default class Chat extends React.Component {
  constructor(props){
    super(props)
    this.state={
      user1: null, //Receiver 
      user2: null, //Sender //MainUser now...
      results : null,
      chatText : ''
    }
  }

  componentDidMount() {
    this.setState({user1: 'james', user2: 'calvin'}, ()=> {
      this.getUserDataFromFB()
    })
  }

  getUserDataFromFB = () => {
    db.ref(`${this.state.user1 + this.state.user2}`)
    .on('value', (snapshot)=> {
      const results = []
      snapshot.forEach(childSnapShot => {
        results.push({
          id:childSnapShot.key,
          ...childSnapShot.val()
        })
      })
      this.setState({results})
    })
  }

  handleChatSubmit = async (e) => {
    const chatResponse = await db.ref(`${this.state.user1 + this.state.user2}`).push({
      sender: this.state.user1,
      receiver: this.state.user2,
      text: this.state.chatText
    })
    if (chatResponse) {
      this.setState({chatText: ''})
    }
  }

  render(){
    console.log(this.state.results)
    return (
      <View style={styles.chatBox}>
        <Text style={{width:"100%", backgroundColor: "#3EC1E1", fontWeight: '700', fontSize: 30, marginBottom: 10}}>{`Chat with ${this.state.user1}`}</Text>
        <View style={{height:"80%", width:"100%"}}>
        {
          (this.state.results) &&
          this.state.results.map((value, index)=> {
            if (value.receiver === this.state.user1) {
              return <View key={index} style={{width:"100%", marginBottom: 5, alignItems: 'flex-start'}}><Text style={styles.user1_chat}>{value.text}</Text></View>
            } else {
              return <View key={index} style={{width:"100%", marginBottom: 5, alignItems: 'flex-end'}}><Text style={styles.user2_chat}>{value.text}</Text></View>
            }
          })
          
        }
        </View>
        
        <TextInput
          value = {this.state.chatText}
          autoFocus = {true}
          editable = {true}
          maxLength = {100}
          style={styles.textBox}
          placeholder=" user message"
          onChangeText={(chatText) => this.setState({chatText})}
          onKeyPress={ (event) => {
              if(event.nativeEvent.key === "Enter"){
                  this.handleChatSubmit(event)
              } 
            }}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  chatBox: {
    width: '100%', 
    height: '100%',
    alignItems: 'center',
    borderColor: "#3EC1E1",
    borderWidth: 5
  },
  user1_chat: { //Receiver
    color: 'black',
    backgroundColor: '#c7d3d6',
    borderWidth: 5,
    borderRadius: 50,
    borderColor: 'transparent',
    textAlign: 'left',
  },
  user2_chat: { //Sender //MainUser now...
    color: 'white',
    backgroundColor: '#157f99',
    borderWidth: 5,
    borderRadius: 50,
    borderColor: 'transparent',
    textAlign: 'right',
  },
  textBox: {
    height: 100, 
    color: 'white',
    backgroundColor: '#157f99',
    width: "100%",
    borderWidth: 5,
    borderColor: "#104d5c",
    placeholderTextColor: "white"
  }
})

