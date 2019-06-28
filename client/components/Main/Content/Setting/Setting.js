import React from 'react';
import { StyleSheet, Text, View, Button, Modal, TouchableHighlight, TextInput } from 'react-native';
import axios from 'axios';

export default class Setting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      maxDistance: `${this.props.user.maxDistance}`,
      preferredSize: `${this.props.user.preferredSize}`,
      preferredGender: `${this.props.user.preferredGender}`,
      genderpicker: false,
      locationpicker: false,
      dogsizepicker: false,
      updated: false
    };
    this.updateGender = this.updateGender.bind(this);
    this.updateLocation = this.updateLocation.bind(this);
    this.updateSize = this.updateSize.bind(this);
    this.updateRequest = this.updateRequest.bind(this);
    this.changeUpdateButton = this.changeUpdateButton.bind(this);
  }

  changeUpdateButton() {
    return this.state.update ? title = "Updated" : title = "Update"
  }


  updateRequest() {
    let { maxDistance, preferredSize, preferredGender } = this.state
    let id = this.props.user.id;
    console.log(this.props)
    axios
      .put(`http://localhost:3000/api/gabi/update/${id}`, { maxDistance, preferredSize, preferredGender })
      .then(() => this.setState({
        updated: !this.state.updated
      }))
      .catch(err => console.error(err))
  }

  updateGender(value) {
    this.setState({
      preferredGender: value,
      genderpicker: !this.state.genderpicker
    })
  }

  updateLocation(value) {
    this.setState({
      maxDistance: value,
      locationpicker: !this.state.locationpicker
    })
  }

  updateSize(value) {
    this.setState({
      preferredSize: value,
      dogsizepicker: !this.state.dogsizepicker
    })
  }

  render() {
    let gender = ["Male", "Female", "No Preference"];
    let location = [5, 10, 15, 100];
    let dogsize = ["Small", "Medium", "Large"];

    return (
      <View >
        <Text style={styles.title} >Filter By </Text>

        <View style={styles.topBorder}></View>

        <View style={styles.container}>
          <Text style={styles.filters} onPress={() => this.setState({ genderpicker: !this.state.genderpicker })}>Preferred Animal Gender </Text>
          <Text style={styles.answers}>{this.state.preferredGender}</Text>

          <Modal animationType='slide' visible={this.state.genderpicker} transparent={true} >
            <View style={styles.modalcontainer}>
              {gender.map((sex, index) => {
                return <TouchableHighlight onPress={() => this.updateGender(sex)} key={index} style={styles.modalChoicesBox}>
                  <Text style={styles.choices}>{sex}</Text>
                </TouchableHighlight>
              })}
            </View>
          </Modal>


          <Text style={styles.filters} onPress={() => this.setState({ locationpicker: !this.state.locationpicker })}>Maximum Location Radius: </Text>
          <Text style={styles.answers}>{this.state.maxDistance} miles </Text>

          <Modal animationType='slide' visible={this.state.locationpicker} transparent={true} >
            <View style={styles.modalcontainer}>
              {location.map((selection, index) => {
                return <TouchableHighlight onPress={() => this.updateLocation(selection)} key={index} style={styles.modalChoicesBox}>
                  <Text style={styles.choices}>{selection}</Text>
                </TouchableHighlight>
              })}
            </View>
          </Modal>

          <Text style={styles.filters} onPress={() => this.setState({ dogsizepicker: !this.state.dogsizepicker })}>Preferred Animal Size: </Text>
          <Text style={styles.answers}>{this.state.preferredSize}</Text>
          <Modal animationType="slide" visible={this.state.dogsizepicker} transparent={true}>
            <View style={styles.modalcontainer}>
              {dogsize.map((size, index) => {
                return <TouchableHighlight onPress={() => this.updateSize(size)} key={index} style={styles.modalChoicesBox}>
                  <Text style={styles.choices}> {size} </Text>
                </TouchableHighlight>
              })}
            </View>
          </Modal>

          <View style={styles.updateButton}>
            <Button onPress={() => this.updateRequest()} title={`${!this.state.updated ? "Update" : "Updated"}`} />
          </View>

        </View>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  topBorder: {
    borderColor: '#c9c9c9',
    borderBottomWidth: 2, 
  },
  title: {
    fontFamily: "GillSans",
    fontSize: 30,
    padding: 10,
    fontWeight: '500',
    color: '#3EC1E1'
  },
  textContainer: {
    borderStyle: 'solid',
    borderColor: "#efefef"
  },
  container: {
    backgroundColor: '#efefef',
    height: '100%',
    padding: 20
  },
  filters: {
    marginTop: 25,
    fontSize: 15,
    fontWeight: 'bold',
    paddingBottom: 10
  },
  answers: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 10,
    paddingRight: 30,
    backgroundColor: 'white'
  },
  modalcontainer: {
    // marginTop: 100,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 500,

  },
  modalChoicesBox: {
    borderBottomWidth: 1,
    borderBottomColor: '#3EC1E1',
    borderStyle: 'solid',

  },
  choices: {
    height: 60,
    width: 336,
    backgroundColor: 'white',
    paddingLeft: 20,
    paddingTop: 15,
    textAlign: 'center',

  },
  updateButton: {
    marginTop: 90
  }
})
