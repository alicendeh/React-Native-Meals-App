import React from "react";
import { View, Text } from "react-native";
import styles from "./Header.style";
import { StatusBar } from "expo-status-bar";

const Header = ({ title }) => {
  return (
    <View style={styles.container}>
      <StatusBar style={"light"} />
      <Text style={styles.text}>{title} </Text>
    </View>
  );
};

export default Header;
