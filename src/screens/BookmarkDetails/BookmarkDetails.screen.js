import React, { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  BackHandler,
  Alert,
} from "react-native";
import { Text, HeaderBack, Container } from "../../component";
import styles from "./BookmarkDetails.style";
import Feather from "react-native-vector-icons/Feather";
// import {ALL_HYMNS} from '../../data/DATA';
import Toast from "react-native-toast-message";
import deviceStorage from "../../storage/storage";

const BookmarkDetails = ({ route, navigation }) => {
  const [storeCurrentHymNumber, setStoreCurrentHymNumber] = useState(null);
  const [storePreviousHymnNumber, setStorePreviousHymnNumber] = useState(null);
  const [displayData, setdisplayData] = useState([]);
  const [keepDecValue, setkeepDecValue] = useState();
  const [storeAllBookmarks, setstoreAllBookmarks] = useState([]);

  //Destructure Hymn Data

  const { item, index } = route.params;
  const { HymneNo, title, bookmarked, body } = item;

  //Fetch the hymn number on screen load
  useEffect(() => {
    setStoreCurrentHymNumber(index);
    setdisplayData(item);

    const backAction = () => {
      setdisplayData([]);
      setStoreCurrentHymNumber(item.HymneNo);
      navigation.navigate("Bookmarks");
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, [route.params]);

  useEffect(async () => {
    let allBookmarks = await deviceStorage.loadDataObj("BookmarkedList");
    await setstoreAllBookmarks(allBookmarks);
  }, []);

  return (
    <Container
      containerStyles={{
        paddingVertical: 55,
      }}
      hideHeader
    >
      <HeaderBack
        setdisplayData={setdisplayData}
        headerTitle={"Hymn"}
        navigation={navigation}
      />

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text fs={14}>
          {displayData.length === 1 ? displayData[0].title : title}
        </Text>
      </View>
      <ScrollView>
        <Text ff={1} fs={13} textStyles={styles.body}>
          {displayData.length === 1 ? displayData[0].body : body}
        </Text>
      </ScrollView>
      <View
        style={{
          alignItems: "center",
        }}
      >
        <Text fs={18} c="#493997">
          {displayData.length === 1 ? displayData[0].HymneNo : HymneNo}
        </Text>
      </View>
    </Container>
  );
};

export default BookmarkDetails;
