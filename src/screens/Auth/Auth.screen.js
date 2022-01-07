import React, { useState, useEffect, useContext } from "react";
import {
  View,
  SafeAreaView,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  ScrollView,
} from "react-native";
import styles from "./Auth.style";
import LottieView from "lottie-react-native";
import { Text } from "../../component";
import Feather from "react-native-vector-icons/Feather";
import deviceStorage from "../../storage/storage";
import { AllHymnsContext } from "../../Context/AllHymns";
import * as ImagePicker from "expo-image-picker";

const Auth = ({ navigation }) => {
  const allHymnsContext = useContext(AllHymnsContext);
  const {
    ALL_HYMNS,
    MASS_DATA,
    PRAYER_DATA,
    SEASON_DATA,
    getALLHymns,
    getPrayerData,
    getSeasonsData,
    getMassData,
  } = allHymnsContext;

  const [imageSource, setImageSource] = useState(null);
  const [storeName, setstoreName] = useState(null);

  useEffect(() => {
    checkDataPrence();
  }, []);

  const checkDataPrence = async () => {
    if (ALL_HYMNS.length === 0) {
      getALLHymns();
    }
    if (MASS_DATA.length === 0) {
      getMassData();
    }
    if (PRAYER_DATA.length === 0) {
      getPrayerData();
    }
    if (SEASON_DATA.length === 0) {
      getSeasonsData();
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

  const submit = async () => {
    deviceStorage.storeInfoString("UserInfoName", storeName);
    deviceStorage.storeInfoString("UserInfoPicture", imageSource);

    if (
      ALL_HYMNS.length === 0 ||
      SEASON_DATA.length === 0 ||
      MASS_DATA.length === 0 ||
      PRAYER_DATA.length === 0
    ) {
      navigation.replace("Intermidiate");
    } else {
      navigation.replace("DrawerNavigator");
    }
  };

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#fff" barStyle={"dark-content"} />

        <View style={styles.annimContainer}>
          <LottieView
            source={require("../../../assets/Annimations/70640-floating-magic-link-login.json")}
            autoPlay
            loop
          />
        </View>
        <View style={styles.welcome}>
          <Text fs={24}>Welcome</Text>
          <Text
            pv={12}
            c="#ccc"
            ff={1}
            textStyles={{
              textAlign: "center",
            }}
          >
            Please provide your name and picture to proceed
          </Text>
        </View>
        <View>
          <View>
            <TextInput
              onChangeText={(txt) => setstoreName(txt)}
              value={storeName}
              placeholder="Name"
              style={styles.input}
            />
            {imageSource ? (
              <TouchableOpacity
                onPress={showImgUploadOption}
                style={styles.capturedImgView}
              >
                <Image
                  source={{
                    uri: imageSource,
                  }}
                  style={styles.capturedImg}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={showImgUploadOption}
                style={styles.inputView}
              >
                <Feather name="camera" size={22} color="#000" />
                <Text pv={7}>Upload Image</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
        <TouchableOpacity onPress={submit} style={styles.submit}>
          <Text c="#fff">Proceed</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Auth;
