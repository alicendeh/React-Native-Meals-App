import {StyleSheet} from 'react-native';
import theme from '../../theme';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  main: {
    flex: 1,
  },
  container2: {
    paddingTop: 25,
    paddingHorizontal: 21,
    paddingBottom: 12,
  },
  main2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputContainer: {
    backgroundColor: '#efefef',
    borderRadius: 10,
    marginTop: 15,
    paddingHorizontal: 7,
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
  annimContainer: {
    width: theme.DEVICE_WIDTH * 0.9,
    height: '80%',
  },
  comingSoonText: {
    textAlign: 'center',
  },
});

export default style;
