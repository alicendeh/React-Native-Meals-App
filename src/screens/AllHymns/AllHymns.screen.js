import React, { useContext, useEffect, useState, Component } from "react";
import {
  View,
  Pressable,
  ActivityIndicator,
  TouchableOpacity,
  TextInput,
  Dimensions,
  FlatList,
} from "react-native";
import {
  HymnCard,
  Container,
  Text,
  NoBookMarkAnnimation,
} from "../../component";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import LottieView from "lottie-react-native";
import { AllHymnsContext } from "../../Context/AllHymns";
import deviceStorage from "../../storage/storage";
import styles from "./AllHymns.style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  RecyclerListView,
  DataProvider,
  LayoutProvider,
} from "recyclerlistview";

const WIDTH = Dimensions.get("window").width;

export class AllHymns extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataProvider: new DataProvider((r1, r2) => r1 !== r2),
      storeAllHymns: [],
      toggleSearchBar: false,
      text: "",
      from: "",
      filtered: null,
    };
  }

  layoutProvider = new LayoutProvider(
    (index) => {
      return index;
    },
    (type, dim) => {
      dim.width = WIDTH;
      dim.height = 80;
    }
  );

  fetchData = async () => {
    let allHymns = await deviceStorage.loadDataObj("AllHymns");

    await AsyncStorage.setItem("shouldLoadIntermidiate", "false");
    this.setState({
      ...this.state,
      storeAllHymns: [...allHymns.getAll],
      dataProvider: this.state.dataProvider.cloneWithRows([...allHymns.getAll]),
    });
  };

  componentDidMount() {
    this.fetchData();
  }

  rowRenderer = (type, item, index) => {
    return (
      <HymnCard
        navigation={this.props.navigation}
        item={item}
        index={index}
        from={"allHymns"}
      />
    );
  };

  filterList = (text) => {
    let newText = text.toLowerCase();
    if (newText != "") {
      this.setState({ txt: text });
      let newFIlteredList = this.state.storeAllHymns.filter(
        (item) =>
          item.title.toLowerCase().includes(newText) ||
          item.HymneNo.includes(newText) ||
          item.category.toLowerCase().includes(newText) ||
          item.body.toLowerCase().includes(newText)
      );
      // filtered(newFIlteredList);
      this.setState({
        filtered: newFIlteredList,
      });
    } else {
      this.setState({
        txt: "",
        filtered: null,
      });
    }
  };

  render() {
    return (
      <Container
        MHNull
        searchIconHidden
        bckg="#FFEAD5"
        headerTitle="All Hymns"
        c="#fff"
        first={true}
        navigation={this.props.navigation}
      >
        {this.state.toggleSearchBar && (
          <View style={styles.mainSearchCOntainer}>
            <View style={styles.iconPosition1}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  this.setState({
                    toggleSearchBar: false,
                    txt: "",
                    filtered: null,
                  });
                }}
                style={styles.filterView}
              >
                <Entypo name="cross" size={22} color="#fff" />
              </TouchableOpacity>
            </View>
            <View style={styles.searchBar}>
              <View style={styles.input}>
                <TextInput
                  value={this.state.txt}
                  onChangeText={(text) => this.filterList(text)}
                  style={styles.inputBox}
                  placeholder="Search"
                />
              </View>
              <View>
                {this.state.txt && this.state.txt.length > 0 ? (
                  <Pressable
                    onPress={() => {
                      this.setState({
                        txt: "",
                        filtered: null,
                      });
                    }}
                  >
                    <Entypo size={19} color="black" name="cross" />
                  </Pressable>
                ) : (
                  <AntDesign size={19} color="black" name="search1" />
                )}
              </View>
            </View>
          </View>
        )}

        <View style={styles.main}>
          {this.state.toggleSearchBar == false && (
            <View style={styles.iconPosition}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() =>
                  this.setState({
                    toggleSearchBar: !this.state.toggleSearchBar,
                  })
                }
                style={styles.filterView}
              >
                <AntDesign name="filter" size={22} color="#fff" />
              </TouchableOpacity>
            </View>
          )}
          {this.state.filtered !== null && this.state.filtered.length < 1 && (
            <View>
              <View style={styles.annimContainer}>
                <LottieView
                  source={require("../../../assets/Annimations/70780-no-result-found.json")}
                  autoPlay
                  loop
                />
              </View>
              <Text textStyles={styles.comingSoonText} ff={1}>
                Search for another keyword🤗
              </Text>
            </View>
          )}

          {this.state.storeAllHymns.length == 0 ? (
            <View style={styles.indic}>
              <ActivityIndicator color="#493997" size="large" />
              <Text
                ff={1}
                textStyles={{
                  textAlign: "center",
                }}
              >
                Dont border you do not have to be online, Hang in there while we
                fetch your data.🤗
              </Text>
            </View>
          ) : (
            <View
              style={{
                flex: 1,
              }}
            >
              {this.state.filtered !== null ? (
                <View style={{ flex: 1 }}>
                  <FlatList
                    data={this.state.filtered}
                    keyExtractor={(_, index) => index}
                    renderItem={({ item, index }) => (
                      <HymnCard
                        navigation={this.props.navigation}
                        item={item}
                        index={index}
                        from={"filtered"}
                      />
                    )}
                  />
                </View>
              ) : (
                <RecyclerListView
                  style={{
                    flex: 1,
                  }}
                  dataProvider={this.state.dataProvider}
                  layoutProvider={this.layoutProvider}
                  rowRenderer={this.rowRenderer}
                />
              )}
            </View>
          )}
        </View>
      </Container>
    );
  }
}

export default AllHymns;
