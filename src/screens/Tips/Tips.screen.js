import React, {useState, useEffect} from 'react';
import {Text} from '../../component';
import TopTab from '../../navigation/TopTab';
import {
  View,
  TouchableOpacity,
  StatusBar,
  TextInput,
  SafeAreaView,
  FlatList,
} from 'react-native';
import styles from './Tips.style';
import deviceStorage from '../../storage/storage';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Collapsible from 'react-native-collapsible';
import LottieView from 'lottie-react-native';

const Tips = ({navigation}) => {
  const [searchable, setsearchable] = useState();
  const [overallDataSet, setoverallDataSet] = useState([]);
  const [toggleSearchBar, settoggleSearchBar] = useState(false);
  const [searchValue, setsearchValue] = useState('');
  const [filteredList, setfilteredList] = useState([]);
  const [keepCurrentIndex, setkeepCurrentIndex] = useState(null);

  const searchBar = () => {
    settoggleSearchBar(!toggleSearchBar);
    setfilteredList([]);
  };

  useEffect(() => {
    showResults();
  }, []);

  const showResults = async () => {
    let allPrayers = await deviceStorage.loadDataObj('AllPrayers');
    let allSeasons = await deviceStorage.loadDataObj('AllSeasons');
    let allMassInfo = await deviceStorage.loadDataObj('AllMassData');

    setoverallDataSet([
      ...allPrayers.getAll,
      ...allSeasons.getAll,
      ...allMassInfo.getAll,
    ]);
  };

  const filterList = text => {
    let newText = text.toLowerCase();

    if (newText != '') {
      setsearchValue(text);
      let listDataSet = overallDataSet.filter(data =>
        data.name.toLowerCase().includes(newText),
      );
      setfilteredList(listDataSet);
    } else {
      setfilteredList([]);
    }
  };

  const detailsToggler = index => {
    index === keepCurrentIndex
      ? setkeepCurrentIndex(-1)
      : setkeepCurrentIndex(index);
  };

  return (
    <SafeAreaView style={[styles.container]}>
      <View
        style={{
          display: 'flex',
        }}>
        <View
          style={[
            styles.container2,
            {
              backgroundColor: '#fff',
            },
          ]}>
          <View style={styles.main2}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <AntDesign name="menu-fold" size={21} />
            </TouchableOpacity>
            <TouchableOpacity onPress={searchBar}>
              {toggleSearchBar ? (
                <Entypo size={21} color="black" name="cross" />
              ) : (
                <AntDesign name="search1" size={21} />
              )}
            </TouchableOpacity>
          </View>

          {toggleSearchBar && (
            <View>
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Search"
                  onChangeText={text => filterList(text)}
                  style={styles.inputBox}
                  placeholder="Search"
                />
              </View>
            </View>
          )}
          <Text fs={27} pv={12}>
            Mastery Center
          </Text>
        </View>
      </View>
      <View
        style={[
          {
            marginVertical: 4,
            marginHorizontal: 21,
            flex: 1,
          },
        ]}>
        {toggleSearchBar ? (
          <View>
            {filteredList.length > 0 ? (
              <View>
                <FlatList
                  keyExtractor={(_, index) => index}
                  data={filteredList}
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
              </View>
            ) : (
              <View>
                <View style={styles.annimContainer}>
                  <LottieView
                    source={require('../../../assets/Annimations/70780-no-result-found.json')}
                    autoPlay
                    loop
                  />
                </View>
                <Text textStyles={styles.comingSoonText} ff={1}>
                  Your search results will appear here🤗
                </Text>
              </View>
            )}
          </View>
        ) : (
          <TopTab />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Tips;
