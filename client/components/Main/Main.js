import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Nav from './Nav/Nav';
import Content from './Content/Content';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      route: 'bio', //'setting', 'bio', 'swipe', 'detail', 'match', 'chat', 'edit'
      interestedDog: {},
      userinfo: [],
      allusers: [],
      matches: []
    };
    this.changeRoute = this.changeRoute.bind(this);
    this.changeInterestedDog = this.changeInterestedDog.bind(this);
  }

  changeRoute(route) {
    this.setState({ route });
  }

  changeInterestedDog(interestedDog) {
    this.setState({ interestedDog });
  }

  handleRouteChange = route => {
    this.setState({ route });
  };

  render() {
    return (
      <View style={{ height: '100%' }}>
        <Nav
          route={this.state.route}
          handleRouteChange={this.handleRouteChange}
        />
        <Content
          interestedDog={this.state.interestedDog}
          changeInterestedDog={this.changeInterestedDog}
          changeRoute={this.changeRoute}
          route={this.state.route}
          user={this.props.user}
          handleRouteChange={this.handleRouteChange}
        />
      </View>
    );
  }
}
