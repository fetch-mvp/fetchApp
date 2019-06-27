import React from "react";
import { StyleSheet, Text, View, Button, ImageBackground } from "react-native";
import Swiper from "react-native-deck-swiper";

export default class Swipe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
      <View style={{position: 'absolute', left: "2%", top: "3%", zIndex: 1}}><Button onPress = {()=>{this.props.changeRoute('bio')}} title="Profile" /></View>
      <View style={{position: 'absolute', right: "2%", top: "3%", zIndex: 1}}><Button onPress = {()=>{this.props.changeRoute('match')}} title="Matches" /></View>
        <Swiper
          cards={this.props.queue}
          renderCard={card => {
            return (
              <View style={styles.card}>
                <ImageBackground
                  source={{ uri: card.images[0] }}
                  style={{ width: "100%", height: "100%" }}
                >
                  <Text style={styles.text}>{card.userName}</Text>
                  <View style={styles.button}>
                    <Button
                      color="black"
                      onPress={() => {
                        this.props.changeRoute("detail");
                        this.props.changeInterestedDog(card);
                        console.log(card._id);
                      }}
                      title="More Info"
                    />
                  </View>
                </ImageBackground>
              </View>
            );
          }}
          onSwipedLeft={cardIndex => {
            console.log('you hate this dog: ', this.props.queue[cardIndex].userName);
          }}
          onSwipedRight={cardIndex => {
            console.log('you love this dog: ', this.props.queue[cardIndex].userName);
          }}
          onSwipedAll={() => {
            console.log("you swiped everyone!");
          }}
          cardIndex={0}
          backgroundColor={"black"}
          stackSize={3}
          disableTopSwipe={true}
          disableBottomSwipe={true}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent"
  },
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#E8E8E8",
    justifyContent: "center",
    backgroundColor: "white"
  },
  text: {
    textAlign: "center",
    fontSize: 40,
    backgroundColor: "transparent",
    top: "3%"
  },
  button: {
    position: "absolute",
    bottom: "3%",
    right: "0%"
  }
});
