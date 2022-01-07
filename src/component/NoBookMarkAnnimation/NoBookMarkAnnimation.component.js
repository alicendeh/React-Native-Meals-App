import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import styles from './NoBookMarkAnnimation.style';
import LottieView from 'lottie-react-native';
import {Container, Text} from '../../component';
import Feather from 'react-native-vector-icons/Feather';

const NoBookMarkAnnimation = ({navigation}) => {
  return (
    <Container navigation={navigation} searchIconHidden>
      <View style={styles.annimContainer}>
        <LottieView
          source={require('../../../assets/Annimations/70780-no-result-found.json')}
          autoPlay
          loop
        />
      </View>
      <Text textStyles={styles.comingSoonText} ff={1}>
        You do not have any bookmarks yet. All your bookmarked items will appear
        here !! 🤗
      </Text>
      <View style={styles.btnView}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.iconView}>
          <Feather name="arrow-right" size={22} color="#fff" />
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default NoBookMarkAnnimation;
