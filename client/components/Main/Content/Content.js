import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Bio from './Bio/Bio';
import Setting from './Setting/Setting';
import Swipe from './Swipe/Swipe';
import Detail from './Detail/Detail';
import Match from './Match/Match';
import EditProfile from './EditProfile/EditProfile.js';
import Chat from './Chat/Chat';

const Content = ({
  route,
  user,
  changeRoute,
  changeInterestedDog,
  interestedDog,
  handleRouteChange
}) => {
  if (route === 'bio') {
    return (
      <Bio
        user={user}
        changeRoute={changeRoute}
        handleRouteChange={handleRouteChange}
      />
    );
  } else if (route === 'setting') {
    return <Setting user={user} />;
  } else if (route === 'swipe') {
    return (
      <Swipe
        changeInterestedDog={changeInterestedDog}
        changeRoute={changeRoute}
        user={user}
      />
    );
  } else if (route === 'detail') {
    return (
      <Detail
        interestedDog={interestedDog}
        changeRoute={changeRoute}
        user={user}
      />
    );
  } else if (route === 'match') {
    return <Match user={user} />;
  } else if (route === 'chat') {
    return <Chat user={user} />;
  } else if (route === 'edit') {
    return (
      <EditProfile
        user={user}
        changeRoute={changeRoute}
        handleRouteChange={handleRouteChange}
      />
    );
  }
};
export default Content;
