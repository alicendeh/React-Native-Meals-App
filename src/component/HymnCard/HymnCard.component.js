import React, {useState, useContext, useEffect} from 'react';
import {View, Text as RNText, TouchableOpacity} from 'react-native';
import styles from './HymnCard.style';
import {Text} from '../../component';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {RANDOM_COLOR_SET} from '../../data/DATA';
import DeviceStorage from '../../storage/storage';
import {AllHymnsContext} from '../../Context/AllHymns';

const HymnCard = ({item, navigation, index, from}) => {
  const allHymnsContext = useContext(AllHymnsContext);
  const {addToBookMark, ALL_BOOKMARKS, ALL_HYMNS} = allHymnsContext;
  const [storeAllBookmarks, setstoreAllBookmarks] = useState([]);

  const {HymneNo, body, category, title} = item;

  const [modalTod, setmodalTod] = useState(false);

  const openHymnDetails = () => {
    navigation.navigate('HymnDetails', {
      item: item,
      index: index,
      from: from,
    });
  };
  const bookmarked = async item => {
    await addToBookMark(item);
    navigation.navigate('Bookmarks');
  };

  useEffect(() => {
    getBookMarkedList();
  }, [ALL_BOOKMARKS]);

  const getBookMarkedList = async () => {
    let getAllBookMarks = await DeviceStorage.loadDataObj('BookmarkedList');
    setstoreAllBookmarks(getAllBookMarks);
  };

  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}
      activeOpacity={0.9}
      onPress={openHymnDetails}>
      <View
        onPress={() => setmodalTod(true)}
        style={[
          styles.numView,
          {
            backgroundColor:
              RANDOM_COLOR_SET[
                Math.floor(Math.random() * RANDOM_COLOR_SET.length)
              ],
          },
        ]}>
        <Text c="#fff"> {HymneNo} </Text>
      </View>

      <View style={styles.container}>
        <View style={styles.txtView}>
          <Text numberOfLines={1} fs={14} ff={1}>
            {title}
          </Text>
          <Text
            c="#A7A7A7"
            textStyles={{
              paddingHorizontal: 6,
            }}
            numberOfLines={1}
            fs={12}
            ff={2}>
            {category}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => bookmarked(item)}
          style={styles.bookmarkIcon}>
          <Ionicons
            name="ios-bookmark"
            size={21}
            color={
              storeAllBookmarks.some(e => e.HymneNo === HymneNo)
                ? '#434343'
                : '#d2d2d2'
            }
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default HymnCard;
