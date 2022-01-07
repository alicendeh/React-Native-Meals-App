import React, { useEffect, useState, useContext } from "react";
import { View, FlatList, TouchableOpacity, Alert } from "react-native";

import DeviceStorage from "../../storage/storage";
import { AllHymnsContext } from "../../Context/AllHymns";
import { Container, Text, NoBookMarkAnnimation } from "../../component";
import styles from "./Bookmarks.style";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RANDOM_COLOR_SET } from "../../data/DATA";
import Toast from "react-native-toast-message";

const Bookmarks = ({ navigation }) => {
  const allHymnsContext = useContext(AllHymnsContext);
  const {
    ALL_BOOKMARKS,
    alreadyBookmarked,
    removeBookmarkedItem,
    removeToast,
  } = allHymnsContext;

  const [storeAllBookmarks, setstoreAllBookmarks] = useState([]);

  useEffect(() => {
    getBookMarkedList();
    alreadyBookmarked && showToast();
    setTimeout(() => {
      removeToast();
    }, 10);
  }, [ALL_BOOKMARKS]);

  const getBookMarkedList = async () => {
    let getAllBookMarks = await DeviceStorage.loadDataObj("BookmarkedList");
    setstoreAllBookmarks(getAllBookMarks);
    await DeviceStorage.storeInfoString(
      "TOTAL_BOOKMARKS",
      getAllBookMarks.length.toString()
    );
  };

  //toast
  const showToast = () => {
    Toast.show({
      type: "success",
      text1: "Bookmarked Already",
      text2: `You've already bookmarked this item👋`,
      position: "top",
      visibilityTime: 2000,
    });
  };

  //Unbookmark ALert
  const unbookmarked = (item) => {
    Alert.alert(
      "Are you sure you want to remove this item from your bookmarks?",
      "Choose an option to continue",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "Yes", onPress: () => removeBookark(item) },
      ]
    );
  };

  //remove bookmark

  const removeBookark = (item) => {
    removeBookmarkedItem(item);
  };

  const openBookmarkDetails = (item, index) => {
    navigation.navigate("BookmarkDetails", {
      item: item,
      index: index,
    });
  };
  return (
    <View style={styles.mainContainer}>
      {storeAllBookmarks.length == 0 ? (
        <NoBookMarkAnnimation navigation={navigation} />
      ) : (
        <Container
          navigation={navigation}
          bckg="#FFEAD5"
          first={true}
          searchIconHidden
          headerTitle={" Bookmarks"}
        >
          {storeAllBookmarks && (
            <FlatList
              keyExtractor={(_, index) => index}
              showsVerticalScrollIndicator={false}
              data={storeAllBookmarks}
              removeClippedSubviews
              initialNumToRender={7}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                  activeOpacity={0.9}
                  onPress={() => openBookmarkDetails(item, index)}
                >
                  <View
                    // onPress={() => setmodalTod(true)}
                    style={[
                      styles.numView,
                      {
                        backgroundColor:
                          RANDOM_COLOR_SET[
                            Math.floor(Math.random() * RANDOM_COLOR_SET.length)
                          ],
                      },
                    ]}
                  >
                    <Text c="#fff"> {item.HymneNo}</Text>
                  </View>

                  <View style={styles.container}>
                    <View style={styles.txtView}>
                      <Text numberOfLines={1} fs={14} ff={1}>
                        {item.title}
                      </Text>
                      <Text
                        c="#A7A7A7"
                        textStyles={{
                          paddingHorizontal: 6,
                        }}
                        numberOfLines={1}
                        fs={12}
                        ff={2}
                      >
                        {item.category}
                      </Text>
                    </View>
                    <TouchableOpacity
                      onPress={() => unbookmarked(item)}
                      style={styles.bookmarkIcon}
                    >
                      <Ionicons
                        name="ios-bookmark"
                        size={21}
                        color={"#434343"}
                      />
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              )}
            />
          )}
        </Container>
      )}
    </View>
  );
};

export default Bookmarks;
