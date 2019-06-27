import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  Image
} from "react-native";
import { Pages } from "react-native-pages";

export default class MoreInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const listImages = this.props.interestedDog.images.map((url, idx) => (
      <ImageBackground
        key={idx}
        source={{ uri: url }}
        style={{ width: "100%", height: "100%", top: "0%" }}
        imageStyle={{ resizeMode: "cover" }}
      />
    ));
    return (
      <View style={{ width: "100%", height: "100%", backgroundColor:"black" }}>
        <View
          style={{ position: "absolute", left: "2%", top: "3%", zIndex: 1 }}
        >
          <Button
            onPress={() => {
              this.props.changeRoute("swipe");
            }}
            title="Back"
          />
        </View>
        <View style={{ width: "100%", height: "60%" }}>
          <Pages containerStyle={{}}>{listImages}</Pages>
        </View>
        <View>
          <Text
            style={{
              fontSize: 30,
              fontFamily: "GillSans-SemiBoldItalic",
              color: "white",
              textAlign: "center"
            }}
          >
            {this.props.interestedDog.userName}
          </Text>
          <Text style={styles.textContainer}>{"Gender: " + (this.props.interestedDog.animalGender? "Male": "Female")}</Text>
          <Text style={styles.textContainer}>{"Location: " + this.props.interestedDog.userLocation}</Text>
        <Text style={styles.textContainer}>{"Description: " + this.props.interestedDog.description}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  textContainer: {
    color: 'white',
    fontWeight: 'bold',
    paddingLeft: 10
  }

});
