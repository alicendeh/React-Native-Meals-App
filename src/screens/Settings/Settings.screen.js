import React, {useEffect, useContext, useState} from 'react';
import {View, Image, TouchableOpacity, Pressable} from 'react-native';
import {Text, Container, EditSettingsModal} from '../../component';
import styles from './Settings.style';
import deviceStorage from '../../storage/storage';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Collapsible from 'react-native-collapsible';

const Settings = ({navigation}) => {
  const [userName, setuserName] = useState(null);
  const [profilePIC, setprofilePIC] = useState(null);
  const [toggleSettingsCard, settoggleSettingsCard] = useState(false);
  const [showModal, setshowModal] = useState(false);

  useEffect(async () => {
    let data = await deviceStorage.loadDataString('UserInfoName');
    let data1 = await deviceStorage.loadDataString('UserInfoPicture');
    setuserName(data);
    setprofilePIC(data1);
  }, [
    deviceStorage.loadDataString('UserInfoName'),
    deviceStorage.loadDataString('UserInfoPicture'),
  ]);

  const editSettings = () => {
    setshowModal(!showModal);
  };

  return (
    <Container
      searchIconHidden
      containerStyles={{
        flex: 1,
        backgroundColor: '#fff',
      }}
      navigation={navigation}
      headerTitle={'Account Details'}>
      <EditSettingsModal
        initialUsername={userName}
        initialProfilePic={profilePIC}
        showModal={showModal}
        setshowModal={setshowModal}
      />
      <View style={styles.card}>
        {profilePIC ? (
          <View style={styles.imgView}>
            <Image
              style={styles.img}
              source={{
                uri: profilePIC,
              }}
            />
          </View>
        ) : (
          <View style={styles.imgView1}>
            <Image
              style={styles.img}
              source={require('../../../assets/images/default-user-icon.jpg')}
            />
          </View>
        )}
        <View>
          <Text>{userName === '~' ? 'No name provided' : userName}</Text>
        </View>
        <TouchableOpacity
          onPress={editSettings}
          style={[styles.iconView, styles.rightIcon]}>
          <AntDesign name="edit" size={19} color="#fff" />
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default Settings;
