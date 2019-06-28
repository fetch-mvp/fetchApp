import React from 'react';
import axios from 'axios';
// import Chat from '../Chat/EditProfile';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default class Match extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userinfo: [],
      allusers: [],
      matches: []
    };
    this.get = this.get.bind(this);
  }

  componentDidMount() {
    this.get();
  }

  get() {
    axios
      .get('http://localhost:3000/api/gabi/getone')
      .then(data =>
        this.setState(
          {
            userinfo: data.data
          },
          () => {
            axios
              .get('http://localhost:3000/api/gabi/getall')
              .then(data =>
                this.setState(
                  {
                    allusers: data.data
                  },
                  () => {
                    let matches = this.state.userinfo.matches.map(Number);
                    let arr = [];

                    for (let i = 0; i < this.state.allusers.length; i++) {
                      for (let j = 0; j < matches.length; j++) {
                        if (
                          this.state.allusers[i].id === matches[j] &&
                          arr.length !== matches.length
                        ) {
                          arr.push(this.state.allusers[i]);
                        }
                      }
                    }
                    this.setState({
                      matches: arr
                    });
                  }
                )
              )
              .catch(err => console.error(err));
          }
        )
      )
      .catch(err => console.error(err));
  }

  render() {
    if (this.state.matches.length > 0) {
      return (
        <View>
          <Text style={styles.title}>Matches</Text>
          <ScrollView>
            {this.state.matches.map(match => {
              return (
                <View style={styles.container}>
                  <Image
                    style={styles.images}
                    source={{ uri: `${match.images}` }}
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
    left: 2
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
    margin: 20,
    borderStyle: 'solid'
  },
  username: {
    alignSelf: 'center',
    paddingLeft: 70
  }
});
