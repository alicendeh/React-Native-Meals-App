import React from "react";
import { View, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Tips,
  Audio,
  AllHymns,
  Bookmarks,
  OtherSongs,
  Settings,
  HymnDetails,
} from "../screens";
import DrawerContent from "./DrawerContent";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      initialRouteName="AllHymns"
      screenOptions={{
        headerShown: false,
        drawerType: "slide",
      }}
    >
      <Drawer.Screen name="AllHymns" component={AllHymns} />
      <Drawer.Screen name="Tips" component={Tips} />
      <Drawer.Screen name="OtherSongs" component={OtherSongs} />
      <Drawer.Screen name="Bookmarks" component={Bookmarks} />
      <Drawer.Screen name="Audio" component={Audio} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
