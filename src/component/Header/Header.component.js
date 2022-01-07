import React, { useState, useEffect, useContext } from "react";
import {
  View,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  Platform,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Text } from "../../component";
import styles from "./Header.style";
import Entypo from "react-native-vector-icons/Entypo";
import { AllHymnsContext } from "../../Context/AllHymns";

const Header = ({
  searchIconHidden,
  headerTitle,
  navigation,
  bckg,
  c,
  first,
}) => {
  const allHymnsContext = useContext(AllHymnsContext);
  const { changeSearchView, searchedText } = allHymnsContext;

  const [toggleSearchBar, settoggleSearchBar] = useState(false);
  const [themeImageURI, setthemeImageURI] = useState();

  const searchBar = () => {
    settoggleSearchBar(!toggleSearchBar);
    changeSearchView(!toggleSearchBar);
  };

  useEffect(() => {
    let date = new Date().getMonth();
    if (date === 0) {
      setthemeImageURI(
        require("../../../assets/images/Zugpsitze_mountain.jpg")
      );
    }
    if (date === 3) {
      setthemeImageURI(require("../../../assets/images/advent.jpeg"));
    }
    if (date === 5) {
      setthemeImageURI(require("../../../assets/images/easter.jpg"));
    }
    if (date === 8) {
      setthemeImageURI(require("../../../assets/images/1-1-lent19.jpg"));
    }
    if (date === 11) {
      setthemeImageURI(
        require("../../../assets/images/pexels-photo-695971.jpeg")
      );
    }
  }, []);
  return (
    <View>
      {first ? (
        <ImageBackground
          source={themeImageURI}
          style={[
            styles.container,
            {
              backgroundColor: bckg ? bckg : "#fff",
            },
          ]}
        >
          <View
            style={{
              width: "120%",
              backgroundColor: "rgba(0,0,0,0.5)",
              height: Platform.OS === "ios" ? "220%" : "340%",
              position: "absolute",
              flex: 1,
            }}
          ></View>
          <View style={styles.main}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <AntDesign name="menu-fold" color={c ? c : "#fff"} size={21} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                display: searchIconHidden ? "none" : "flex",
              }}
            >
              <AntDesign name="search1" size={21} />
            </TouchableOpacity>
          </View>
          <Text c={c ? c : "#fff"} fs={27} pv={12}>
            {headerTitle}
          </Text>
        </ImageBackground>
      ) : (
        <View
          style={[
            styles.container,
            {
              backgroundColor: bckg ? bckg : "#fff",
            },
          ]}
        >
          <View style={styles.main}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <AntDesign name="menu-fold" size={21} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={searchBar}
              style={{
                display: searchIconHidden ? "none" : "flex",
              }}
            >
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
                  onChangeText={(text) => filterList(text)}
                  style={styles.inputBox}
                  placeholder="Search"
                />
              </View>
            </View>
          )}
          <Text fs={27} pv={12}>
            {headerTitle}
          </Text>
        </View>
      )}
    </View>
  );
};

export default Header;
