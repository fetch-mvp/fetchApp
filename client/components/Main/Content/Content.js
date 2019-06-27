import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Bio from './Bio/Bio';
import Setting from './Setting/Setting';
import Swipe from './Swipe/Swipe';
import Detail from './Detail/Detail';
import Match from './Match/Match';
import Chat from './Chat/Chat';
import EditProfile from './EditProfile/EditProfile.js';


const Content = ({refreshQueue, route, user, changeRoute, changeInterestedDog, interestedDog, queue, allusers}) => {
    if (route === 'bio') {
      return <Bio user={user}/>
    } else if (route === 'setting') {
      return <Setting user={user}/>
    } else if (route === 'swipe') {
      return <Swipe refreshQueue = {refreshQueue} user={user} queue = {queue} changeInterestedDog = {changeInterestedDog} changeRoute = {changeRoute} user={user}/>
    } else if (route === 'detail') {
      return <Detail interestedDog = {interestedDog} changeRoute = {changeRoute} user={user}/>
    } else if (route === 'match') {
      return <Match user={user} allusers={allusers}/>
    } else if (route === 'editprofile') {
      return <EditProfile />
    }
}
export default Content;
