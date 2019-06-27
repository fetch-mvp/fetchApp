import React from "react";
import { StyleSheet, Text, View, Button, ImageBackground, Image } from "react-native";
import { Pages } from "react-native-pages";

export default class MoreInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const listImages = this.props.interestedDog.images.map((url, idx)=>
    <ImageBackground
    key = {idx}
    source={{ uri: url }}
    style={{ width: "100%", height: "100%", top: "0%" }}
    imageStyle={{resizeMode: 'cover'}}
  />
    )
    return (
      <View style={{ width: "100%", height: "100%"}}>
        <View style={{position: 'absolute', left: "2%", top: "3%", zIndex: 1}}><Button onPress = {()=>{this.props.changeRoute('swipe')}} title="Back" /></View>
        <View style={{ width: "100%", height: "60%"}}>
        <Pages containerStyle={{}}>
          {listImages}
        </Pages>
        </View>
        <Text>{this.props.interestedDog.userName}</Text>
        <Image style={{width: 13, height: 13}} source={{uri: "https://img.icons8.com/ios/50/000000/male-filled.png"}}></Image>
        <Text>{this.props.interestedDog.animalGender}</Text>
        <Text>{"Location: " + this.props.interestedDog.userLocation}</Text>
        {/* <Text>{"Description: " + this.props.interestedDog.description}</Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({});
