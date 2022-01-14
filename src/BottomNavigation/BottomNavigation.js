import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Favorites, AllRecipes } from "../screens";
const BottomNavigation = createMaterialBottomTabNavigator();

const Drawer = () => {
  return (
    <BottomNavigation.Navigator initialRouteName="AllRecipes">
      <BottomNavigation.Screen name="AllRecipes" component={AllRecipes} />
      <BottomNavigation.Screen name="Favorites" component={Favorites} />
    </BottomNavigation.Navigator>
  );
};

export default Drawer;
