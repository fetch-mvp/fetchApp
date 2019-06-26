import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default class Bio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props.user);

    return (
      <View>
        <Text style={styles.profile}>Profile</Text>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: `${this.props.user.images[0]}` }}
            style={styles.image}
          />
        </View>
        <View>
          <Text style={styles.textContainer}>{this.props.user.userName}</Text>
          <View style={styles.textbox}>
            <Text style={styles.textContainer2}>
              {' '}
              My name is {this.props.user.userName}. Who be you? if you be cool
              we can rule...the world that is because together we can move
              mountains...or just hike them. I like hiking. You might think, but{' '}
              {this.props.user.userName}, you don't have that much strength in
              your back legs to hike mountains" to which I reply "Dang that's
              what rest is for! And physical therapy yo!We hike one day. We rest
              two. You and me. Together. Forever.
            </Text>
          </View>
        </View>
        <Button title="Edit Profile" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    paddingLeft: 1,
    paddingRight: 1
  },
  image: {
    height: 350,
    width: 400,
    marginTop: 20
  },
  textContainer: {
    justifyContent: 'center',
    paddingTop: 370,
    paddingBottom: 20,
    fontSize: 30,
    fontFamily: 'GillSans-SemiBoldItalic',
    color: '#3EC1E1'
  },
  profile: {
    color: '#3EC1E1',
    alignSelf: 'center',
    paddingTop: 30,
    fontSize: 40,
    fontFamily: 'GillSans-SemiBoldItalic'
  },

  textContainer2: {
    paddingLeft: 8,
    color: '#fff',
    fontWeight: 'bold'
  },

  textbox: {
    borderRadius: 10,
    backgroundColor: '#3EC1E1',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10
  }
});
//3EC1E1 background color
