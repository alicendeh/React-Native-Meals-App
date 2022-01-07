import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {Text} from '..';
import styles from './Prayers.style';
import Collapsible from 'react-native-collapsible';
import deviceStorage from '../../storage/storage';

const Prayers = () => {
  const [keepCurrentIndex, setkeepCurrentIndex] = useState(null);
  const [prayerData, setprayerData] = useState([]);

  useEffect(async () => {
    let allPrayers = await deviceStorage.loadDataObj('AllPrayers');
    await setprayerData(allPrayers);
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
      {prayerData.length === 0 ? (
        <ActivityIndicator color="#493997" size="large" />
      ) : (
        <>
          <FlatList
            keyExtractor={(_, index) => index}
            contentContainerStyle={styles.container}
            data={prayerData.getAll}
            renderItem={({item, index}) => (
              <TouchableOpacity
                onPress={() => detailsToggler(index)}
                activeOpacity={0.9}
                style={styles.main}>
                <Text textStyles={styles.txt}>{item.name}</Text>
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

export default Prayers;
