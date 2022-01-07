import React, {useState, useEffect, useContext} from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import styles from './IntermidiateReplica.style';
import {Text} from '../../component';
import Feather from 'react-native-vector-icons/Feather';
import ProgressCircle from 'react-native-progress-circle';
import {AllHymnsContext} from '../../Context/AllHymns';
import NetInfo from '@react-native-community/netinfo';

const IntermidiateReplica = ({navigation}) => {
  const allHymnsContext = useContext(AllHymnsContext);
  const {
    ALL_HYMNS,
    MASS_DATA,
    PRAYER_DATA,
    SEASON_DATA,
    getALLHymns,
    getPrayerData,
    getSeasonsData,
    getMassData,
  } = allHymnsContext;

  const [progressLevel, setprogressLevel] = useState(0);
  const [isOffline, setOfflineStatus] = useState(true);

  useEffect(() => {
    console.log(isOffline, 'here');
  }, [isOffline]);

  useEffect(async () => {
    // const removeNetInfoSubscription = await NetInfo.addEventListener(state => {
    //   const offline = state.isConnected;
    //   setOfflineStatus(offline);
    //   console.log(state.isConnected, 'online status');
    // });

    // return () => removeNetInfoSubscription();

    NetInfo.fetch().then(state => {
      setOfflineStatus(state.isConnected);
      // console.log();
      console.log(isOffline);
    });
  }, []);

  useEffect(() => {
    refetch();
  }, [ALL_HYMNS, MASS_DATA, SEASON_DATA, PRAYER_DATA]);

  const refetch = () => {
    console.log('retying....');
    if (ALL_HYMNS.length === 0) {
      getALLHymns();
    }
    if (MASS_DATA.length === 0) {
      getMassData();
    }
    if (PRAYER_DATA.length === 0) {
      getPrayerData();
    }
    if (SEASON_DATA.length === 0) {
      getSeasonsData();
    }

    if (
      PRAYER_DATA.getAll &&
      MASS_DATA.getAll &&
      SEASON_DATA.getAll &&
      ALL_HYMNS.getAll
    ) {
      setprogressLevel(100);
    }
  };

  const callAlert = () =>
    Alert.alert(
      'You appear to be offline',
      'Please turn on you internet connection and TRY AGAIN ',
      [{text: 'TRY AGAIN', onPress: () => refetch()}],
    );

  return (
    <SafeAreaView style={styles.Container} searchIconHidden>
      {isOffline === false && callAlert()}
      <View>
        <ProgressCircle
          percent={progressLevel}
          radius={100}
          borderWidth={8}
          color="#3399FF"
          shadowColor="#999"
          bgColor="#fff">
          <Text style={{fontSize: 18}}>{progressLevel}%</Text>
        </ProgressCircle>
      </View>
      <Text textStyles={styles.comingSoonText} ff={1}>
        We require you to have a stable internet connection to proceed. Note
        that you donot need to be online anymore after this stage 🤗
      </Text>
      <View style={styles.btnView}>
        {progressLevel === 100 && (
          <TouchableOpacity
            onPress={() => navigation.replace('DrawerNavigator')}
            style={styles.iconView}>
            <Feather name="arrow-right" size={22} color="#fff" />
          </TouchableOpacity>
        )}
        {progressLevel < 100 && (
          <ActivityIndicator color="#493997" size="large" />
        )}
      </View>
    </SafeAreaView>
  );
};

export default IntermidiateReplica;
