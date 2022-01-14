import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Drawer from "./src/Drawer/Drawer";
import { CategoryMeals } from "./src/screens";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Drawer} />
        <Stack.Screen name="CategoryMeals" component={CategoryMeals} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
