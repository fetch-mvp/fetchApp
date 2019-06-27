import React from 'react';
import axios from 'axios';
// import Chat from '../Chat/Chat';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';



export default class Match extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
<<<<<<< HEAD

    }
=======
      chat: null,
    }
    this.grabCurrentChat = this.grabCurrentChat.bind(this);
  }

  grabCurrentChat() {

>>>>>>> 158e8232f3951d9b0705c9f9fbce1095420e6a7e
  }

  render() {
    if (this.props.matches.length > 0) {
      return (
        <View>
          <Text style={styles.title}>Matches</Text>
          <ScrollView>
            {this.props.matches.map((match, key) => {
              return <View style={styles.container} key={key}>
<<<<<<< HEAD
                <Image style={styles.images} source={{ uri: `${match.images}` }} />
                <Text style={styles.username}>{match.userName}</Text>
=======
                <Image style={styles.images} source={{ uri: `${match.images}` }} onPress={() => this.grabCurrentChat()}/>
                <Text style={styles.username} >{match.userName}</Text>
>>>>>>> 158e8232f3951d9b0705c9f9fbce1095420e6a7e
              </View>
            })}
          </ScrollView>
        </View>
      )
    } else {
      return (
        <View>
          <Text> Pending </Text>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  title: {
    paddingTop: 30,
    paddingBottom: 30,
    fontWeight: '700',
    fontSize: 40,
    fontFamily: 'Verdana',
    left: 2,
    justifyContent: 'center'
  },
  container: {
    // alignSelf: 'stretch'
    left: 2,
    right: 1,
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  images: {
    width: 150,
    height: 150,
    borderRadius: 75,
    paddingLeft: 10,
    margin: 20,
    // borderStyle: 'solid'
  },
  username: {
    alignSelf: 'center',
    paddingLeft: 70,
  }
})
