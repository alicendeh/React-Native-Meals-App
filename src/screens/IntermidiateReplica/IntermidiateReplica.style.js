import {StyleSheet} from 'react-native';
import theme from '../../theme';

const style = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    paddingHorizontal: 22,
    paddingVertical: 22,
  },

  annimContainer: {
    width: theme.DEVICE_WIDTH * 0.9,
    height: '50%',
  },
  comingSoonText: {
    textAlign: 'center',
    marginVertical: 30,
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
