import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default class Bio extends React.Component {
  constructor(props){
    super(props)
    this.state={}
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
          <Text style={styles.textContainer}>
            Name: {this.props.user.userName}
          </Text>
          <Text>
            {' '}
            My name is Bertha. Who be you? if you be cool we can rule...the
            world that is because together we can move mountains...or just hike
            them. I like hiking. You might think, but EmmyLou, you don't have
            that much strength in your back legs to hike mountains" to which I
            reply "Dang that's what rest is for! And physical therapy yo!We hike
            one day. We rest two. You and me. Together. Forever. Hit me up. P.S.
            that's me-the hot beagle Boston mix in the middle. With my homies.{' '}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    // alignContent: 'stretch',
    // marginTop: 20,
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
    paddingBottom: 50
  },
  profile: {
    color: 'blue',
    alignSelf: 'center',
    paddingTop: 20,
    fontSize: 50,
    fontFamily: 'GillSans-SemiBoldItalic'
  }

  // textContainer2: {
  //   justifyContent: 'center',
  //   marginBottom: 400
  // }
});
