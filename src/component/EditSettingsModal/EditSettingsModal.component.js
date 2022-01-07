import React, { useEffect, useState } from "react";
import {
  View,
  Modal,
  Pressable,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import styles from "./EditSettingsModal.style";
import { Text, RoundImage } from "../../component";
import deviceStorage from "../../storage/storage";
import Entypo from "react-native-vector-icons/Entypo";
import * as ImagePicker from "expo-image-picker";

const EditSettingsModal = ({
  showModal,
  setshowModal,
  initialUsername,
  initialProfilePic,
}) => {
  const [userName, setuserName] = useState(null);
  const [profilePIC, setprofilePIC] = useState(null);
  const [storeName, setstoreName] = useState(null);
  const [imageSource, setImageSource] = useState(null);

  useEffect(async () => {
    let data = await deviceStorage.loadDataString("UserInfoName");
    let data1 = await deviceStorage.loadDataString("UserInfoPicture");
    setuserName(data);
    setprofilePIC(data1);
  }, []);

  const submit = () => {
    if (storeName != "" && imageSource !== "") {
      deviceStorage.storeInfoString("UserInfoName", storeName);
      deviceStorage.storeInfoString("UserInfoPicture", imageSource);

      setshowModal(false);
    }
    if (storeName == "" && imageSource == "") {
      setshowModal(false);
    }
    if (storeName !== "" && imageSource == "") {
      deviceStorage.loadDataObj("UserInfoName", storeName);
      setshowModal(false);
    }
    if (storeName == "" && imageSource !== "") {
      deviceStorage.storeInfoString("UserInfoPicture", imageSource);
      setshowModal(false);
    }
  };

  const showImgUploadOption = () => {
    Alert.alert("Upload Picture Via ?", "Choose an option to continue", [
      {
        text: "Gallery",
        onPress: () => uploadViaGallery(),
      },
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
    ]);
  };

  const uploadViaGallery = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImageSource(result.uri);
    }
  };

  return (
    <Modal
      presentationStyle={"formSheet"}
      visible={showModal}
      animationType="slide"
      onRequestClose={() => {
        setshowModal(!showModal);
      }}
    >
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: "#fff",
        }}
      >
        <View style={styles.container}>
          <View style={styles.header}>
            <Pressable onPress={() => setshowModal(false)}>
              <Entypo name="chevron-thin-left" size={22} color="#000" />
            </Pressable>
            <View style={styles.textView}>
              <Text fs={21} ff={1} textStyles={styles.title}>
                Edit Profile
              </Text>
            </View>
          </View>
          <View style={styles.currentSetting}>
            {imageSource ? (
              <RoundImage uri={imageSource} w={80} h={80} />
            ) : (
              <View>
                {profilePIC ? (
                  <RoundImage uri={profilePIC} w={80} h={80} />
                ) : (
                  <View style={styles.imgContainer}>
                    <Image
                      style={styles.img}
                      source={require("../../../assets/images/default-user-icon.jpg")}
                    />
                  </View>
                )}
              </View>
            )}
            <TouchableOpacity
              onPress={showImgUploadOption}
              activeOpacity={0.8}
              style={styles.iconVIew}
            >
              <Entypo name="edit" size={18} color="#fff" />
            </TouchableOpacity>
            <View>
              <Text fs={19}>
                {userName === "~" ? "Your name will appear here" : userName}
              </Text>
            </View>
          </View>
          <View style={styles.editView}>
            <Text ff={1}> Username</Text>
            <TextInput
              style={styles.input}
              onChangeText={(txt) => setstoreName(txt)}
              value={storeName}
              placeholder="Change your username here"
            />
          </View>
          <TouchableOpacity
            onPress={submit}
            activeOpacity={0.8}
            style={styles.btn}
          >
            <Text c="#fff">Save</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Modal>
  );
};

export default EditSettingsModal;
