import React from "react";
import { StyleSheet, Text, View, Button, ImageBackground } from "react-native";
import Swiper from "react-native-deck-swiper";
import axios from "axios";
import Modal from "react-native-modal";

export default class Swipe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalVisible: false
    };
    this.pushSwipe = this.pushSwipe.bind(this);
    this.pushPreferences = this.pushPreferences.bind(this);
    this.addMatches = this.addMatches.bind(this);
  }

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  pushSwipe(currId, targetId) {
    axios
      .put("http://localhost:3000/api/calvin/swiped", {
        currId,
        targetId
      })
      .then(function(response) {
        console.log("success push swiped!");
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  pushPreferences(currId, targetId) {
    axios
      .put("http://localhost:3000/api/calvin/preferences", {
        currId,
        targetId
      })
      .then(function(response) {
        console.log("success push preferences!");
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  addMatches(receiverId, addId) {
    axios
      .put("http://localhost:3000/api/calvin/matches", {
        receiverId,
        addId
      })
      .then(function(response) {
        console.log("success push matches!");
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Modal isVisible={this.state.isModalVisible}>
          <View style={{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }}>
            <Button title="Hide modal" onPress={this.toggleModal} />
            <Text style={{
              textAlign: "center",
    fontSize: 40,
    backgroundColor: "transparent",
    top: "3%",
    color: "red"
    }}>You got a new match!!</Text>
          </View>
        </Modal>
        <View
          style={{ position: "absolute", left: "2%", top: "3%", zIndex: 1 }}
        >
          <Button
            onPress={() => {
              this.props.changeRoute("bio");
              this.props.refreshQueue();
            }}
            title="Profile"
          />
        </View>
        <View
          style={{ position: "absolute", right: "2%", top: "3%", zIndex: 1 }}
        >
          <Button
            onPress={() => {
              this.props.changeRoute("match");
              this.props.refreshQueue();
            }}
            title="Matches"
          />
        </View>

        {this.props.queue.length > 0 ? (
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
              console.log("you are: ", this.props.user.id);
              this.pushSwipe(
                this.props.user._id,
                this.props.queue[cardIndex]._id
              );
              console.log(
                "you hate this dog: ",
                this.props.queue[cardIndex].userName
              );
            }}
            onSwipedRight={cardIndex => {
              this.pushSwipe(
                this.props.user._id,
                this.props.queue[cardIndex]._id
              );
              this.pushPreferences(
                this.props.user._id,
                this.props.queue[cardIndex].id
              );
              console.log(
                "you love this dog: ",
                this.props.queue[cardIndex].userName
              );
              if (
                this.props.queue[cardIndex].preferences.includes(
                  this.props.user.id
                )
              ) {
                // this is a match!!
                console.log(
                  `there is a match between: ${this.props.user.id} and ${
                    this.props.queue[cardIndex].id
                  }`
                );
                this.addMatches(
                  this.props.user._id,
                  this.props.queue[cardIndex].id
                );
                this.addMatches(
                  this.props.queue[cardIndex]._id,
                  this.props.user.id
                );
                this.toggleModal();
                // so a pop up
              }
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
        ) : (
          <View />
        )}
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
