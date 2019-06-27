import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Bio from './Bio/Bio';
import Setting from './Setting/Setting';
import Swipe from './Swipe/Swipe';
import Detail from './Detail/Detail';
import Match from './Match/Match';
import Chat from './Chat/Chat';

<<<<<<< HEAD
const Content = ({route, user, changeRoute, changeInterestedDog, interestedDog, matches}) => {
=======
const Content = ({route, user, changeRoute, changeInterestedDog, interestedDog, queue, matches}) => {
>>>>>>> 158e8232f3951d9b0705c9f9fbce1095420e6a7e
    if (route === 'bio') {
      return <Bio user={user}/>
    } else if (route === 'setting') {
      return <Setting user={user}/>
    } else if (route === 'swipe') {
      return <Swipe queue = {queue} changeInterestedDog = {changeInterestedDog} changeRoute = {changeRoute} user={user}/>
    } else if (route === 'detail') {
      return <Detail interestedDog = {interestedDog} changeRoute = {changeRoute} user={user}/>
    } else if (route === 'match') {
      return <Match user={user} matches={matches}/>
    } else if (route === 'chat') {
      return <Chat user={user} matches={matches}/>
    }
}
export default Content;