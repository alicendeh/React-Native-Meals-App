import {StyleSheet} from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 21,
  },

  main: {
    width: theme.DEVICE_WIDTH - 45,
    backgroundColor: 'white',
    elevation: 2,
    marginVertical: 9,
    paddingHorizontal: 12,
    borderRadius: theme.BORDER_RADUIS_SMALL,
    paddingVertical: 12,
  },
  box: {
    backgroundColor: 'orange',
    width: 27,
  },
  view1: {
    flexDirection: 'row',
  },
});

export default styles;
