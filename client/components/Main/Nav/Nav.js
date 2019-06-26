import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class Nav extends React.Component {
  constructor(props){
    super(props)
    this.state={}
  }

  render(){
    let { route } = this.props

    if (route === 'bio') {
      return (
        <View style={styles.NavBarStyle}>
          <Button 
            onPress={() => this.props.handleRouteChange("setting")}
            title="Settings"
          />
          <Button 
            onPress={() => this.props.handleRouteChange("swipe")}
            title="Swipe"
          />
        </View>
      );
    } else if (route === 'setting') {
      return (
        <View style={styles.NavBarStyle}>
          <Button 
            onPress={() => this.props.handleRouteChange("bio")}
            title="Back =>"
          />
        </View>
      );
    } else if (route === 'swipe') {
      return (
        <View style={styles.NavBarStyle}>
          <Button 
            onPress={() => this.props.handleRouteChange("bio")}
            title="Bio"
          />
          <Button 
            onPress={() => this.props.handleRouteChange("match")}
            title="Match"
          />
        </View>
      );
    } else if (route === 'detail') {
      return (
        <View style={styles.NavBarStyle}>
          <Button 
            onPress={() => this.props.handleRouteChange("swipe")}
            title="<= Back"
          />
        </View>
      );
    } else if (route === 'match') {
      return (
        <View style={styles.NavBarStyle}>
          <Button 
            onPress={() => this.props.handleRouteChange("swipe")}
            title="<= Back"
          />
        </View>
      );
    } else if (route === 'chat') {
      return (
        <View style={styles.NavBarStyle}>
          <Button 
            onPress={() => this.props.handleRouteChange("match")}
            title="<= Back"
          />
        </View>
      );
    }
  }
}


const styles = StyleSheet.create({
  NavBarStyle : {
    height: '10%'
  }
})
