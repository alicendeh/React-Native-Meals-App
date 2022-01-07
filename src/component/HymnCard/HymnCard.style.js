import {StyleSheet} from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    width: theme.DEVICE_WIDTH - 95,
    borderRadius: 12,
    backgroundColor: theme.COLORS.WHITE,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginVertical: 7,
    elevation: 2,
    shadowColor: '#EC5A65',
  },
  main: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  bookmarkIcon: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  numView: {
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: theme.BORDER_RADUIS_SMALL,
    marginRight: 12,
    height: 45,
  },
  txtView: {
    width: '80%',
  },
});

export default styles;
