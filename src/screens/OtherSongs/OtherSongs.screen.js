import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import styles from './OtherSongs.style';
import LottieView from 'lottie-react-native';
import {Container, Text} from '../../component';
import Feather from 'react-native-vector-icons/Feather';
import ProgressCircle from 'react-native-progress-circle';

const OtherSongs = ({navigation}) => {
  return (
    <Container navigation={navigation} searchIconHidden>
      <View style={styles.annimContainer}>
        <LottieView
          source={require('../../../assets/Annimations/80327-coming-soon.json')}
          autoPlay
          loop
        />
      </View>
      <Text textStyles={styles.comingSoonText} ff={1}>
        We are currently working hard on this feature. Keep calm its coming !!
        🤗
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

export default OtherSongs;
