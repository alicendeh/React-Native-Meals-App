import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./RoundImage.style";

const RoundImage = ({ uri }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{
          uri: uri,
        }}
      />
    </View>
  );
};

export default RoundImage;
