import React, { useEffect, useState } from "react";
import { View, ScrollView, TouchableOpacity, BackHandler } from "react-native";
import { Text, HeaderBack, Container } from "../../component";
import styles from "./HymnDetails.style";
import Feather from "react-native-vector-icons/Feather";
// import {ALL_HYMNS} from '../../data/DATA';
import Toast from "react-native-toast-message";
import deviceStorage from "../../storage/storage";
import * as ImagePicker from "expo-image-picker";

const HymnDetails = ({ route, navigation }) => {
  const [storeCurrentHymNumber, setStoreCurrentHymNumber] = useState(null);
  const [storePreviousHymnNumber, setStorePreviousHymnNumber] = useState(null);
  const [displayData, setdisplayData] = useState([]);
  const [keepDecValue, setkeepDecValue] = useState();
  const [storeAllHymns, setstoreAllHymns] = useState([]);

  //Destructure Hymn Data

  const { item, index, from } = route.params;
  const { HymneNo, title, body } = item;

  useEffect(async () => {
    let allHymns = await deviceStorage.loadDataObj("AllHymns");

    await setstoreAllHymns(allHymns.getAll);
  }, []);

  //checker function

  //Fetch the hymn number on screen load
  useEffect(() => {
    if (from === "filtered") {
      setdisplayData(item);

      storeAllHymns.filter(
        (elem, index) =>
          elem.HymneNo === item.HymneNo && setStoreCurrentHymNumber(index)
      );
    } else {
      setStoreCurrentHymNumber(index);
      setdisplayData(item);
    }

    const backAction = () => {
      setdisplayData([]);
      setStoreCurrentHymNumber(item.HymneNo);
      navigation.navigate("AllHymns");
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, [route.params, from]);

  const prevHymn = () => {
    setStorePreviousHymnNumber(storeCurrentHymNumber);
    dec = storeCurrentHymNumber - 1;

    setStoreCurrentHymNumber(dec);

    if (dec < 0) {
      showToast();
      setStoreCurrentHymNumber(0);
      setdisplayData(displayData);
    } else {
      let NewHymnSet = storeAllHymns.filter((_, index) => index === dec);
      setdisplayData(NewHymnSet);
    }
  };

  const nextHymn = () => {
    let inc = storeCurrentHymNumber + 1;
    setStoreCurrentHymNumber(inc);

    if (inc >= storeAllHymns.length) {
      showToast();
    } else {
      let NewHymnSet = storeAllHymns.filter((_, index) => index === inc);
      setdisplayData(NewHymnSet);
    }
  };

  //Toast
  const showToast = () => {
    Toast.show({
      type: "success",
      text1: "Last Hymn Reached",
      text2: "You are currently on the last Hymn👋",
      position: "bottom",
      visibilityTime: 2000,
    });
  };

  return (
    <Container
      containerStyles={{
        paddingTop: 55,
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
          {displayData.length === 1
            ? displayData[0].body.replace(/(\r\n|\n|\r)/gm, "\n")
            : body}
        </Text>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.iconView1} onPress={prevHymn}>
          <Feather name="arrow-left" size={22} color="#493997" />
        </TouchableOpacity>
        <View>
          <Text c="#493997">
            {displayData.length === 1 ? displayData[0].HymneNo : HymneNo}
          </Text>
        </View>
        <TouchableOpacity onPress={nextHymn} style={[styles.iconView]}>
          <Feather name="arrow-right" size={22} color="#fff" />
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default HymnDetails;
