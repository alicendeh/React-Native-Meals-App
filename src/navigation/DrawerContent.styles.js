import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 21,
    paddingHorizontal: 21,
    backgroundColor: '#fff',
    // flex: 1,
  },
  btn: {
    borderRadius: 4,
    width: '70%',
    alignItems: 'center',
    padding: 4,
    flexDirection: 'row',
    marginVertical: 5,
  },
  set: {
    width: '100%',
    alignItems: 'center',
    padding: 4,
    flexDirection: 'row',
    marginVertical: 5,
    borderColor: '#000',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 21,
    paddingHorizontal: 21,
  },
  main: {
    flex: 1,
    justifyContent: 'space-between',
  },
  firstView: {
    paddingTop: 21,
    paddingHorizontal: 21,
  },
  others: {
    paddingVertical: 21,
    paddingHorizontal: 21,
  },

  containerIMage: {
    width: 60,
    height: 60,
    borderRadius: 60,
  },
  img: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
});

export default styles;
