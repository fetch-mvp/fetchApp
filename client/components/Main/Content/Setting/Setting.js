import React from 'react';
import { StyleSheet, Text, View, Button, Modal, TouchableHighlight, TextInput } from 'react-native';
import axios from 'axios';

export default class Setting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      maxDistance: `${this.props.user.maxDistance}` ,
      preferredSize: `${this.props.user.preferredSize}`,
      preferredGender: `${this.props.user.preferredGender}`,
      genderpicker: false,
      locationpicker: false,
      dogsizepicker: false
    };
    this.updateGender = this.updateGender.bind(this);
    this.updateLocation = this.updateLocation.bind(this);
    this.updateSize = this.updateSize.bind(this);
    this.updateRequest = this.updateRequest.bind(this);
  }

  updateRequest() {
    let {maxDistance, preferredSize, preferredGender} = this.state
    let id = this.props.user.id;
    console.log(this.props)
    axios
      .put(`http://localhost:3000/api/gabi/update/${id}`, {maxDistance, preferredSize, preferredGender})
      .then((data) => {
        console.log("axios data : " , data)
      })
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
        {/* <View style={styles.container}> */}
        <Text style={styles.filterText}>Filter By </Text>
        
        <View style={styles.topBorder}></View>

        <View style={styles.container}>
          <Text style={styles.text} onPress={() => this.setState({genderpicker: !this.state.genderpicker})}>Preferred Animal Gender 
            <Text>{this.state.preferredGender}</Text>
          </Text>

        <Modal visible={this.state.genderpicker} transparent={true} >
        <View style={styles.modalcontainer}>
          {gender.map((sex, index) => {
            return <TouchableHighlight onPress={() => this.updateGender(sex)} key={index} style={styles.selection}>
            <Text>{sex}</Text>
            </TouchableHighlight>
          })}
        </View>
        </Modal>


        <Text style={styles.text} onPress={() => this.setState({locationpicker: !this.state.locationpicker})}>Maximum Location Radius: {this.state.maxDistance} miles</Text>
        <Modal style={styles.locationContainer} visible={this.state.locationpicker} transparent={true} >
        <View style={styles.modalcontainer}>
          {location.map((selection, index) => {
            return <TouchableHighlight onPress={() => this.updateLocation(selection)} key={index} style={styles.selection}>
            <Text>{selection}</Text>
            </TouchableHighlight>
          })}
        </View>
        </Modal> 

        <Text style={styles.text} onPress={() => this.setState({dogsizepicker: !this.state.dogsizepicker})}>Preferred Animal Size: {this.state.preferredSize}</Text>
        <Modal visible={this.state.dogsizepicker} transparent={true} style={styles.locationContainer}>
        <View style={styles.modalcontainer}>
          {dogsize.map((size, index) => {
            return <TouchableHighlight onPress={() => this.updateSize(size)} key={index} style={styles.selection}>
              <Text> {size} </Text>
            </TouchableHighlight>
          })}
          </View>
        </Modal> 

        <Button onPress={() => this.updateRequest()} title="Update"/>
        </View>
        {/* </View> */}
      </View >
    );
  }
}

const styles = StyleSheet.create({
  topBorder: {

    borderBottomColor: '#c9c9c9',
    borderBottomWidth: 4, 
  },
  filterText: {
    fontFamily: "GillSans",
    fontSize: 30,
    padding: 15,
    fontWeight: '500',
    color: '#3EC1E1'
  },
  textContainer: {
    borderStyle: 'solid',
    borderColor: "#efefef"
  },
  container: {
    backgroundColor: '#efefef'
  },
  text: {
    // marginTop: 10,
    margin: 20,
    fontSize: 15,
    fontWeight: 'bold',
  },
  modalcontainer: {
    // flex: 1,
    // flexDirection: 'row',
    marginTop: 100,
    height: 100,
    // width: '70%',
    marginLeft: 40,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 500
  },
  selection: {
    height: 30,
    width: 100,
    backgroundColor: '#efefef',
    alignSelf: 'center'
  },
})
