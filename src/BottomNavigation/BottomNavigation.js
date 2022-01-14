import React from "react";
import { View, Text } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Favorites, AllRecipes } from "../screens";

const BottomNavigation = createMaterialBottomTabNavigator();

const Drawer = () => {
  return (
    <BottomNavigation.Navigator>
      <BottomNavigation.Screen name="Favorites" component={Favorites} />
      <BottomNavigation.Screen name="AllRecipes" component={AllRecipes} />
    </BottomNavigation.Navigator>
  );
};

export default Drawer;
