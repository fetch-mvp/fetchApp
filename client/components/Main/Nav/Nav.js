import React from 'react';
import { Platform, Button, StyleSheet, Text, View } from 'react-native';
import Bio from '../Content/Bio/Bio.js';

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { route } = this.props;
    const statusbar = Platform.OS === 'ios' && (
      <View style={styles.statusbar} />
    );

    if (route === 'bio') {
      return (
        <View style={styles.NavBarStyle}>
          {statusbar}
          <Button
            onPress={() => this.props.handleRouteChange('setting')}
            title="Settings"
          />
          <Button
            onPress={() => this.props.handleRouteChange('swipe')}
            title="Swipe"
          />
        </View>
      );
    } else if (route === 'setting') {
      return (
        <View style={styles.NavBarStyle}>
          {statusbar}
          <Button
            onPress={() => this.props.handleRouteChange('bio')}
            title="Back =>"
          />
        </View>
      );
    } else if (route === 'swipe') {
      return <View />;
    } else if (route === 'detail') {
      return <View>{statusbar}</View>;
      return <View />;
    } else if (route === 'match') {
      return (
        <View style={styles.NavBarStyle}>
          {statusbar}
          <Button
            onPress={() => this.props.handleRouteChange('swipe')}
            title="<= Back"
          />
        </View>
      );
    } else if (route === 'chat') {
      return (
        <View style={styles.NavBarStyle}>
          {statusbar}
          <Button
            onPress={() => this.props.handleRouteChange('match')}
            title="<= Back"
          />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  NavBarStyle : {
    width: '100%',
    height: '10%',
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
    marginRight: 40
  },
  statusbar : {
    marginTop: 30,
    backgroundColor: 'white',
    // height: 30
  }
})
