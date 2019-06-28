import React from 'react';
import axios from 'axios';
// import Chat from '../Chat/EditProfile';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default class Match extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chat: null
    };
  }

  componentDidMount() {
    this.props.currentMatches();
  }

  // getCurrentMatches() {
  //   let id = this.props.user._id
  //   let that = this;

  //   axios
  //     .get(`http://localhost:3000/api/gabi/getall`)
  //     .then(res => {
  //       let currentMatches = res.data.filter(x => (x._id === id ))[0].matches;
  //       let matchedUsers = res.data.filter(x => currentMatches.includes(x.id));

  //       this.setState({
  //         matches: matchedUsers
  //       })
  //     })
  //     .catch(err => console.log(err))
  // }

  render() {
    if (this.props.matches.length > 0) {
      return (
        <View>
          <Text style={styles.title}>Matches</Text>
          <ScrollView>
            {this.props.matches.map((match, key) => {
              return (
                <View style={styles.container} key={key}>
                  <Image
                    style={styles.images}
                    source={{ uri: `${match.images[0]}` }}
                    onPress={() => this.grabCurrentChat()}
                  />
                  <Text style={styles.username}>{match.userName}</Text>
                </View>
              );
            })}
          </ScrollView>
        </View>
      );
    } else {
      return (
        <View>
          <Text> Pending </Text>
        </View>
      );
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
    flexDirection: 'row'
  },
  images: {
    width: 150,
    height: 150,
    borderRadius: 75,
    paddingLeft: 10,
    margin: 20
    // borderStyle: 'solid'
  },
  username: {
    alignSelf: 'center',
    paddingLeft: 70
  }
});
