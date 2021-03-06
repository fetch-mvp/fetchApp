import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Bio from './Bio/Bio';
import Setting from './Setting/Setting';
import Swipe from './Swipe/Swipe';
import Detail from './Detail/Detail';
import Match from './Match/Match';
import EditProfile from './EditProfile/EditProfile';

const Content = ({
  matches,
  refreshQueue,
  route,
  user,
  changeRoute,
  changeInterestedDog,
  interestedDog,
  queue,
  currentMatches
}) => {
  if (route === 'bio') {
    return <Bio user={user} changeRoute={changeRoute} />;
  } else if (route === 'setting') {
    return <Setting user={user} />;
  } else if (route === 'swipe') {
    return (
      <Swipe
        currentMatches={currentMatches}
        refreshQueue={refreshQueue}
        user={user}
        queue={queue}
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
    return (
      <Match user={user} currentMatches={currentMatches} matches={matches} />
    );
  } else if (route === 'chat') {
    return <EditProfile user={user} changeRoute={changeRoute} />;
  }
};
export default Content;
