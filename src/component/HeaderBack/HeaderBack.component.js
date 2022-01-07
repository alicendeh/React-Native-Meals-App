import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import styles from './HeaderBack.style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Text} from '../../component';

const HeaderBack = ({headerTitle, navigation, setdisplayData}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backView}
        onPress={() => {
          navigation.goBack();
          setdisplayData([]);
        }}>
        <AntDesign name="arrowleft" size={25} color="#000" />
      </TouchableOpacity>
      <Text textStyles={styles.text} fs={20}>
        {headerTitle}
      </Text>
      <View></View>
    </View>
  );
};

export default HeaderBack;
