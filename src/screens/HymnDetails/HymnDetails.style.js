import {StyleSheet} from 'react-native';
import theme from '../../theme';

const style = StyleSheet.create({
  body: {
    lineHeight: 27,
  },

  iconView: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.COLORS.PRIMARY,
    elevation: 12,
    shadowColor: '#493997',
  },
  iconView1: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: theme.COLORS.PRIMARY,
    elevation: 12,
    shadowColor: '#493997',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 11,
    marginHorizontal: 0,
    backgroundColor: 'transparent',
  },
  hmnoStyle: {
    color: theme.COLORS.PRIMARY,
  },
});

export default style;
