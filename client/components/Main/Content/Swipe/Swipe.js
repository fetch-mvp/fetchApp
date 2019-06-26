import React from 'react'; 
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';
import Swiper from "react-native-deck-swiper";

export default class Swipe extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
  
        pets : [
          {
            "_id": "5d128ac0c204f61ee7dbf664",
            "id": 1,
            "username": "AgustinaDoogle",
            "password": "password",
            "email": "AgustinaDoogle@google.com",
            "preferences": [],
            "matches": [],
            "images": [
              "https://mvp-fetch-app.s3-us-west-1.amazonaws.com/Dog+Pictures/chowcow.jpg",
              "https://mvp-fetch-app.s3-us-west-1.amazonaws.com/Dog+Pictures/chowcow.jpg",
              "https://mvp-fetch-app.s3-us-west-1.amazonaws.com/Dog+Pictures/chowcow.jpg"
            ],
            "animalgender": "male",
            "description": "I'm just a small town dog that needs some new friends",
            "location": "Glendale"
          },
          {
            "_id": "5d128ac0c204f61ee7dbf665",
            "id": 2,
            "username": "ReynaDoogle",
            "password": "password",
            "email": "ReynaDoogle@google.com",
            "preferences": [],
            "matches": [],
            "images": [
              "https://mvp-fetch-app.s3-us-west-1.amazonaws.com/Dog+Pictures/corgi.jpg"
            ],
            "animalgender": "male",
            "description": "I'm just a small town dog that needs some new friends",
            "location": "Venice"
          },
          {
            "_id": "5d128ac0c204f61ee7dbf666",
            "id": 3,
            "username": "KeanuDoge",
            "password": "password",
            "email": "KeanuDoge@google.com",
            "preferences": [],
            "matches": [],
            "images": [
              "https://mvp-fetch-app.s3-us-west-1.amazonaws.com/Dog+Pictures/germanshepherd.jpg"
            ],
            "animalgender": "male",
            "description": "I'm just a small town dog that needs some new friends",
            "location": "South Pasadena"
          },
          {
            "_id": "5d128ac0c204f61ee7dbf667",
            "id": 4,
            "username": "WatsonDoogle",
            "password": "password",
            "email": "WatsonDoogle@google.com",
            "preferences": [],
            "matches": [],
            "images": [
              "https://mvp-fetch-app.s3-us-west-1.amazonaws.com/Dog+Pictures/goldenR.jpg"
            ],
            "animalgender": "male",
            "description": "I'm just a small town dog that needs some new friends",
            "location": "South Pasadena"
          },
          {
            "_id": "5d128ac0c204f61ee7dbf668",
            "id": 5,
            "username": "SabinaDoogle",
            "password": "password",
            "email": "SabinaDoogle@google.com",
            "preferences": [],
            "matches": [],
            "images": [
              "https://mvp-fetch-app.s3-us-west-1.amazonaws.com/Dog+Pictures/goldenretrieversheperd.jpg"
            ],
            "animalgender": "male",
            "description": "I'm just a small town dog that needs some new friends",
            "location": "Santa Monica"
          },
          {
            "_id": "5d128ac0c204f61ee7dbf669",
            "id": 6,
            "username": "ErnestoDoogle",
            "password": "password",
            "email": "ErnestoDoogle@google.com",
            "preferences": [],
            "matches": [],
            "images": [
              "https://mvp-fetch-app.s3-us-west-1.amazonaws.com/Dog+Pictures/pitbull.jpg"
            ],
            "animalgender": "male",
            "description": "I'm just a small town dog that needs some new friends",
            "location": "Santa Monica"
          },
          {
            "_id": "5d128ac0c204f61ee7dbf66a",
            "id": 7,
            "username": "FletaDoogle",
            "password": "password",
            "email": "FletaDoogle@google.com",
            "preferences": [],
            "matches": [],
            "images": [
              "https://mvp-fetch-app.s3-us-west-1.amazonaws.com/Dog+Pictures/popeye.jpg"
            ],
            "animalgender": "male",
            "description": "I'm just a small town dog that needs some new friends",
            "location": "Santa Monica"
          },
          {
            "_id": "5d128ac0c204f61ee7dbf66b",
            "id": 8,
            "username": "EfrenDoge",
            "password": "password",
            "email": "EfrenDoge@google.com",
            "preferences": [],
            "matches": [],
            "images": [
              "https://mvp-fetch-app.s3-us-west-1.amazonaws.com/Dog+Pictures/shiba-inu-corgi-mix.jpg"
            ],
            "animalgender": "male",
            "description": "I'm just a small town dog that needs some new friends",
            "location": "Glendale"
          },
          {
            "_id": "5d128ac0c204f61ee7dbf66c",
            "id": 9,
            "username": "EleonoreDoogle",
            "password": "password",
            "email": "EleonoreDoogle@google.com",
            "preferences": [],
            "matches": [],
            "images": [
              "https://mvp-fetch-app.s3-us-west-1.amazonaws.com/Dog+Pictures/shiba.jpg"
            ],
            "animalgender": "male",
            "description": "I'm just a small town dog that needs some new friends",
            "location": "South Pasadena"
          },
          {
            "_id": "5d128ac0c204f61ee7dbf66d",
            "id": 10,
            "username": "EbbaDoogle",
            "password": "password",
            "email": "EbbaDoogle@google.com",
            "preferences": [],
            "matches": [],
            "images": [
              "https://mvp-fetch-app.s3-us-west-1.amazonaws.com/Dog+Pictures/siberian-husky-price.jpg"
            ],
            "animalgender": "male",
            "description": "I'm just a small town dog that needs some new friends",
            "location": "Glendale"
          }
        ]
  
      };
    }
  
  
    render() {
      return (
        <View style={styles.container}>
          <Swiper
            cards={this.state.pets}
            renderCard={card => {
              return (
                <View style={styles.card}>
                  <ImageBackground
                    source={{ uri: card.images[0] }}
                    style={{ width: "100%", height: "100%" }}
                  >
                    <Text style={styles.text}>{card.username}</Text>
                    <View style={styles.button}>
                    <Button
                      color = "black"
                      onPress={() => {
                        this.props.changeRoute('detail')
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
            onSwiped={cardIndex => {
              console.log(cardIndex);
            }}
            onSwipedAll={() => {
              console.log("onSwipedAll");
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
      top:"3%"
    },
    button: {
      position: 'absolute',
      bottom:"3%",
      right: "0%"
    }
  });
  