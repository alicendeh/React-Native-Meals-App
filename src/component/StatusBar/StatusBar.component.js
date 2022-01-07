import React from 'react';
import {StatusBar as RNStatusBar} from 'react-native';

const StatusBar = ({barColor, barStyle}) => {
  return <RNStatusBar backgroundColor={barColor} barStyle={barStyle} />;
};

export default StatusBar;
