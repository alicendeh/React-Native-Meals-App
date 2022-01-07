import React from "react";
import { View, Text } from "react-native";
import styles from "./Text.styles";

const TextComponent = ({
  children,
  fs,
  c,
  pv,
  ff,
  textStyles,
  numberOfLines,
}) => {
  return (
    <View>
      <Text
        numberOfLines={numberOfLines}
        style={[
          textStyles,
          {
            // fontFamily: ff === 1 ? 'Poppins-Regular' : 'Poppins-Bold',
            fontSize: fs ? fs : 16,
            color: c ? c : "black",
            paddingVertical: pv ? pv : 0,
          },
        ]}
      >
        {children}
      </Text>
    </View>
  );
};

export default TextComponent;
