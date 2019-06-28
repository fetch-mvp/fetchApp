import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ImageBackground
} from 'react-native';
// import EditProfile from './EditProfile.js';

export default class Bio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      images: [],
      isVisible: true
    };
  }

  setModalVisible = () => {
    this.setState({ isVisible: false });
  };

  render() {
    // console.log('user: ', this.props.user);

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
          <Text style={styles.name}>{this.props.user.userName}</Text>
          <View style={styles.textbox}>
            <Text style={styles.textContainer2}>
              {/* My name is {this.props.user.userName}. Who be you? if you be cool
              we can rule...the world that is because together we can move
              mountains...or just hike them. I like hiking. You might think, but
              {this.props.user.userName}, you don't have that much strength in
              your back legs to hike mountains" to which I reply "Dang that's
              what rest is for! And physical therapy yo!We hike one day. We rest
              two. You and me. Together. Forever. */}
              {this.props.user.description}
            </Text>
          </View>
          <View style={styles.button}>
            <Button
              title="Edit Profile"
              onPress={() => this.props.changeRoute('chat')}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    // flex: 1,
    paddingLeft: 1,
    paddingRight: 1
  },
  image: {
    height: 350,
    width: 400,
    marginTop: 10
  },
  name: {
    justifyContent: 'center',
    // paddingTop: 200,
    paddingBottom: 20,
    paddingLeft: 10,
    fontSize: 30,
    fontFamily: 'GillSans-SemiBoldItalic',
    color: '#3EC1E1'
  },
  profile: {
    color: '#3EC1E1',
    alignSelf: 'center',
    paddingTop: 20,
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
    paddingTop: 60,
    paddingBottom: 60,
    paddingLeft: 10,
    paddingRight: 10
  },
  button: {
    paddingTop: 36
  }
});
//3EC1E1 background color
