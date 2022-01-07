import {Dimensions} from 'react-native';

const COLORS = {
  PRIMARY: '#493997',
  BLACK: '#000000',
  TEXT: '#59BCDC',
  CARD: '#F9F9F9',
  WHITE: '#ffffff',
};

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

export default {
  COLORS,
  DEVICE_WIDTH,
  DEVICE_HEIGHT,

  // border radius
  BORDER_RADUIS_SMALL: 9,
  BORDER_RADUIS_MEDUIM: 21,
  BORDER_RADUIS_LARGE: 50,

  //font sizes
};
