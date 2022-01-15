import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Platform,
} from "react-native";
import { CATEGORIES } from "../../data/data";
import styles from "./AllRecipes.style";
import { Header } from "../../components";

const renderItem = ({ item }) => {
  // console.log();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("CategoryMeals")}
      style={[
        styles.itemContainer,
        {
          backgroundColor: item.color,
        },
      ]}
    >
      <Text style={styles.txt}> {item.title} </Text>
    </TouchableOpacity>
  );
};

const AllRecipes = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {Platform.OS === "ios" ? (
        <View>
          <Header title={"Meal Categories"} />
        </View>
      ) : (
        <SafeAreaView>
          <Header title={"Meal Categories"} />
        </SafeAreaView>
      )}

      <FlatList
        data={CATEGORIES}
        numColumns={2}
        // renderItem={renderItem.bind(this, navigation, item)}_
        renderItem={renderItem}
      />
    </View>
  );
};

export default AllRecipes;
