import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Bio from './Bio/Bio';
import Setting from './Setting/Setting';
import Swipe from './Swipe/Swipe';
import Detail from './Detail/Detail';
import Match from './Match/Match';
import Chat from './Chat/Chat';

const Content = (props) => {
    let {route} = props
    if (route === 'bio') {
      return <Bio user={props.user}/>
    } else if (route === 'setting') {
      return <Setting user={props.user}/>
    } else if (route === 'swipe') {
      return <Swipe user={props.user}/>
    } else if (route === 'detail') {
      return <Detail user={props.user}/>
    } else if (route === 'match') {
      return <Match user={props.user}/>
    } else if (route === 'chat') {
      return <Chat user={props.user}/>
    }
}
export default Content;