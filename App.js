import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DrawerNavigator from "./src/navigation/DrawerNavigator.navigator";
import Toast, { BaseToast } from "react-native-toast-message";
import { AllHymnState } from "./src/Context/AllHymns";
import AsyncStorage from "@react-native-async-storage/async-storage";
import deviceStorage from "./src/storage/storage";
import {
  BookmarkDetails,
  HymnDetails,
  Auth,
  Onboard,
  Intermidiate,
  IntermidiateReplica,
} from "./src/screens";

const Stack = createNativeStackNavigator();

const toastConfig = {
  success: (props) => (
    <BaseToast
      {...props}
      style={{
        borderLeftColor: "orange",
        backgroundColor: "#001829",
      }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 15,
        fontWeight: "400",
        color: "#fff",
      }}
      text2Style={{
        fontSize: 11,
        fontWeight: "400",
        color: "#fff",
      }}
    />
  ),
};

export default function App() {
  const [appLauch, setappLauch] = useState(null);
  const [intermidiateScreenState, setintermidiateScreenState] = useState(null);

  useEffect(async () => {
    checkFirstLauch();
  }, []);

  const checkFirstLauch = async () => {
    let isFirstTime = await AsyncStorage.getItem("FIRST_TIME");
    let intermidiateScreen = await AsyncStorage.getItem(
      "shouldLoadIntermidiate"
    );

    setintermidiateScreenState(intermidiateScreen);

    if (isFirstTime == null) {
      setappLauch(true);

      await AsyncStorage.setItem("FIRST_TIME", "false");
      await AsyncStorage.setItem("UserInfoName", "~");
      await AsyncStorage.setItem("TOTAL_BOOKMARKS", "0");
      await AsyncStorage.setItem("UserInfoPicture", "https://cutt.ly/4UZFQmW");
      deviceStorage.storeInfoObj("BookmarkedList", []);
      deviceStorage.storeInfoObj("allPrayers", []);
      deviceStorage.storeInfoObj("allSeasons", []);
      deviceStorage.storeInfoObj("AllHymns", []);
      deviceStorage.storeInfoObj("allMassInfo", []);
      await AsyncStorage.setItem("shouldLoadIntermidiate", "true");
      // await  deviceStorage.loadDataString('TOTAL_BOOKMARKS', '0');
    } else {
      setappLauch(false);
    }
  };

  return (
    <AllHymnState>
      {appLauch !== null && (
        <>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}
            >
              {appLauch && <Stack.Screen name="Onboard" component={Onboard} />}
              {appLauch && <Stack.Screen name="Auth" component={Auth} />}
              {appLauch === false && intermidiateScreenState === "true" && (
                <Stack.Screen
                  name="IntermidiateReplica"
                  component={IntermidiateReplica}
                />
              )}
              <Stack.Screen
                name="DrawerNavigator"
                component={DrawerNavigator}
              />
              <Stack.Screen
                name="BookmarkDetails"
                component={BookmarkDetails}
              />
              <Stack.Screen name="HymnDetails" component={HymnDetails} />
              <Stack.Screen name="Intermidiate" component={Intermidiate} />
            </Stack.Navigator>
          </NavigationContainer>
          <Toast config={toastConfig} />
        </>
      )}
    </AllHymnState>
  );
}
