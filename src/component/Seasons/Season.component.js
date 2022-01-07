import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {Text} from '..';
import styles from './Season.style';
import Collapsible from 'react-native-collapsible';
import Entypo from 'react-native-vector-icons/Entypo';
import deviceStorage from '../../storage/storage';

const Seasons = () => {
  const [keepCurrentIndex, setkeepCurrentIndex] = useState(null);
  const [seasonsData, setseasonsData] = useState([]);

  useEffect(async () => {
    let allSeasons = await deviceStorage.loadDataObj('AllSeasons');
    await setseasonsData(allSeasons);
  }, []);

  const detailsToggler = index => {
    index === keepCurrentIndex
      ? setkeepCurrentIndex(-1)
      : setkeepCurrentIndex(index);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      {seasonsData.length === 0 ? (
        <ActivityIndicator color="#493997" size="large" />
      ) : (
        <>
          <FlatList
            keyExtractor={(_, index) => index}
            contentContainerStyle={styles.container}
            data={seasonsData.getAll}
            renderItem={({item, index}) => (
              <TouchableOpacity
                onPress={() => detailsToggler(index)}
                activeOpacity={0.9}
                style={styles.main}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text textStyles={styles.txt}>{item.name}</Text>
                  {index === keepCurrentIndex ? (
                    <Entypo name="chevron-small-up" size={21} />
                  ) : (
                    <Entypo name="chevron-down" size={21} />
                  )}
                </View>
                <Collapsible
                  collapsed={index === keepCurrentIndex ? false : true}>
                  <Text
                    ff={1}
                    textStyles={{
                      lineHeight: 30,
                    }}>
                    {item.body}
                  </Text>
                </Collapsible>
              </TouchableOpacity>
            )}
          />
        </>
      )}
    </View>
  );
};

export default Seasons;
