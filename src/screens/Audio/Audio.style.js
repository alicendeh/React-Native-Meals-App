import {StyleSheet} from 'react-native';
import theme from '../../theme';

const style = StyleSheet.create({
  annimContainer: {
    width: theme.DEVICE_WIDTH * 0.9,
    height: '50%',
  },
  comingSoonText: {
    textAlign: 'center',
  },
  iconView: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#493997',
    backgroundColor: '#493997',
    elevation: 12,
    shadowColor: '#493997',
  },
  btnView: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 21,
  },
});

export default style;
