import {StyleSheet} from 'react-native';
import theme from '../../theme/index';

const style = StyleSheet.create({
  card: {
    backgroundColor: '#f2f2f2',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 12,
    marginVertical: 27,
    alignItems: 'center',
  },
  mainView: {
    // backgroundColor: '#f2f2f2',
    borderRadius: 12,
    marginVertical: 27,
    // alignItems: 'center',
  },

  heading: {
    fontFamily: 'Poppins-ExtraBold',
    fontSize: 77,
    textAlign: 'center',
    paddingVertical: 7,
    color: '#493997',
  },
  body: {
    textAlign: 'center',
    color: '#493997',
    fontFamily: 'Poppins-Medium',
  },
  imgView: {
    width: '20%',
    height: 100,
    borderRadius: 7,
    marginTop: -35,
    backgroundColor: '#493997',
    elevation: 7,
    shadowColor: 'red',
    borderRadius: 10,
  },
  imgView1: {
    width: '20%',
    height: 100,
    borderRadius: 7,
    marginTop: -35,
    backgroundColor: '#493997',
    elevation: 0,
    shadowColor: 'red',
    borderRadius: 10,
  },
  imgView3: {
    width: '20%',
    height: 100,
    borderRadius: 7,
    backgroundColor: '#493997',

    borderRadius: 10,
  },
  img: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  rightIcon: {
    backgroundColor: '#493997',
    elevation: 12,
    shadowColor: '#493997',
  },
  iconView: {
    width: 35,
    height: 35,
    borderRadius: 20,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#493997',
    marginHorizontal: 12,
  },
  submit: {
    backgroundColor: theme.COLORS.PRIMARY,
    alignItems: 'center',
    marginVertical: 14,
    paddingVertical: 12,
  },
  input: {
    borderBottomWidth: 1,
  },
  nameView: {
    marginVertical: 12,
  },
});

export default style;
