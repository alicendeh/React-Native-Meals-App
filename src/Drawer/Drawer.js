import React from "react";
import { View, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomNavigation from "../BottomNavigation/BottomNavigation";
const DrawerNavigator = createDrawerNavigator();

const Drawer = () => {
  return (
    <DrawerNavigator.Navigator
      screenOptions={
        {
          // headerShown: false,
        }
      }
    >
      <DrawerNavigator.Screen name="All Recipes" component={BottomNavigation} />
    </DrawerNavigator.Navigator>
  );
};

export default Drawer;
