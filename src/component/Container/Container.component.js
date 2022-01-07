import React from "react";
import { View, Text, FlatList, SafeAreaView, Platform } from "react-native";
import styles from "./Container.style";
import { Header, StatusBar } from "../../component";

const Container = ({
  children,
  searchIconHidden,
  headerTitle,
  navigation,
  containerStyles,
  hideHeader,
  MHNull,
  bckg,
  c,
  first,
}) => {
  const data = ["main"];
  return (
    <View style={styles.container}>
      {Platform.OS === "ios" ? (
        <View style={[styles.container, containerStyles]}>
          <View
            style={{
              display: hideHeader ? "none" : "flex",
            }}
          >
            <Header
              bckg={bckg}
              searchIconHidden={searchIconHidden}
              headerTitle={headerTitle}
              navigation={navigation}
              c={c}
              first={first}
            />
          </View>
          <View
            style={[
              styles.main,
              {
                marginVertical: MHNull ? 0 : 4,
                marginHorizontal: MHNull ? 0 : 21,
              },
            ]}
          >
            {children}
          </View>
        </View>
      ) : (
        <SafeAreaView style={[styles.container, containerStyles]}>
          <View
            style={{
              display: hideHeader ? "none" : "flex",
            }}
          >
            <Header
              bckg={bckg}
              searchIconHidden={searchIconHidden}
              headerTitle={headerTitle}
              navigation={navigation}
              c={c}
              first={first}
            />
          </View>
          <View
            style={[
              styles.main,
              {
                marginVertical: MHNull ? 0 : 4,
                marginHorizontal: MHNull ? 0 : 21,
              },
            ]}
          >
            {children}
          </View>
        </SafeAreaView>
      )}
    </View>
  );
};

export default Container;
