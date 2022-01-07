import React, { useContext, useState, useEffect } from "react";
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
} from "react-native";
import { RoundImage, Text as MyText } from "../component";
import styles from "./DrawerContent.styles";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import { DRAWER_CONTENT_DATA } from "../data/DATA";
import { AllHymnsContext } from "../Context/AllHymns";
import deviceStorage from "../storage/storage";
import { StatusBar } from "expo-status-bar";

const DrawerContent = ({ navigation }) => {
  const [totalBookmarks, settotalBookmarks] = useState(null);
  const [userName, setuserName] = useState(null);
  const [profilePIC, setprofilePIC] = useState(null);

  const allHymnsContext = useContext(AllHymnsContext);
  const { ALL_BOOKMARKS, fetchThemeImage } = allHymnsContext;

  useEffect(async () => {
    // console.log(ALL_BOOKMARKS, 'hhhhhhhhhh');
    let data = await deviceStorage.loadDataString("UserInfoName");
    let data1 = await deviceStorage.loadDataString("UserInfoPicture");
    let totalBookmarkedItems = await deviceStorage.loadDataString(
      "TOTAL_BOOKMARKS"
    );
    settotalBookmarks(totalBookmarkedItems);
    setuserName(data);
    setprofilePIC(data1);
  }, [
    deviceStorage.loadDataString("UserInfoName"),
    deviceStorage.loadDataString("UserInfoPicture"),
  ]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <StatusBar backgroundColor="#fff" style="dark" />
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          justifyContent: "space-around",
        }}
      >
        <View style={styles.firstView}>
          {profilePIC ? (
            <RoundImage uri={profilePIC} />
          ) : (
            <View
              style={[
                styles.containerIMage,
                {
                  marginBottom: 10,
                },
              ]}
            >
              <Image
                style={styles.img}
                source={require("../../assets/images/default-user-icon.jpg")}
              />
            </View>
          )}
          <MyText
            c="#493997"
            textStyles={{
              marginVertical: 12,
              display: userName === "~" ? "none" : "flex",
            }}
            ff={2}
            fs={20}
          >
            {userName}
          </MyText>
          <MyText ff={1} fs={18} p={0} c="#C7C7C7">
            {totalBookmarks && totalBookmarks}{" "}
            {totalBookmarks < 2 ? "Bookmark" : "Bookmarks"}
          </MyText>
        </View>
        <View style={styles.container}>
          <View>
            {DRAWER_CONTENT_DATA.map((item) => (
              <TouchableOpacity
                key={item.name}
                onPress={() => navigation.navigate(item.path)}
                style={[
                  styles.btn,
                  item.line && {
                    width: "100%",
                    paddingHorizontal: 0,
                    marginHorizontal: 0,
                  },
                ]}
              >
                {item.andDesign === true ? (
                  <AntDesign name={item.icon} size={20} color="#493997" />
                ) : (
                  <Entypo name={item.icon} size={20} color="#493997" />
                )}
                <Text
                  style={{
                    fontSize: 16,
                    paddingHorizontal: 12,
                  }}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Settings")}
          style={[styles.set]}
        >
          <AntDesign name="setting" size={20} color="#493997" />

          <Text
            style={{
              fontSize: 16,
              paddingHorizontal: 12,
            }}
          >
            Settings
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.btn, styles.others]}>
          <Entypo name="layers" size={20} color="#493997" />

          <MyText
            textStyles={{
              marginHorizontal: 7,
            }}
          >
            Info
          </MyText>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DrawerContent;
