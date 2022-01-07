import React, {useState, useRef, useContext, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import styles from './Onboard.style';
import LottieView from 'lottie-react-native';
import Feather from 'react-native-vector-icons/Feather';
import {ONBOARD_DATA} from '../../data/DATA';
import {AllHymnsContext} from '../../Context/AllHymns';

const WIDTH = Dimensions.get('screen').width;

const Onboard = ({navigation}) => {
  const allHymnsContext = useContext(AllHymnsContext);
  const {getALLHymns, getPrayerData, getMassData, getSeasonsData} =
    allHymnsContext;

  useEffect(() => {
    getALLHymns();
    getPrayerData();
    getSeasonsData();
    getMassData();
  }, []);

  const ref = useRef(null);
  const [currentElemIndex, setCurrentElemIndex] = useState(0);

  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / WIDTH);
    setCurrentElemIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentElemIndex + 1;
    if (currentElemIndex === ONBOARD_DATA.length - 1) {
      navigation.replace('Auth');
    } else {
      if (nextSlideIndex != ONBOARD_DATA.length) {
        const offset = nextSlideIndex * WIDTH;
        ref?.current?.scrollToOffset({offset});
        setCurrentElemIndex(nextSlideIndex);
      }
    }
  };

  const goToPrevSlide = () => {
    const prevSlideIndex = currentElemIndex - 1;
    if (prevSlideIndex != ONBOARD_DATA.length) {
      const offset = prevSlideIndex * WIDTH;
      ref?.current?.scrollToOffset({offset});
      setCurrentElemIndex(prevSlideIndex);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle={'dark-content'} />

      <TouchableOpacity
        onPress={() => navigation.replace('Auth')}
        style={styles.skip}>
        <Text
          style={[
            styles.skipColor,
            currentElemIndex === ONBOARD_DATA.length - 1
              ? styles.isLast
              : styles.diff,
          ]}>
          GET STARTED
        </Text>
      </TouchableOpacity>
      <FlatList
        ref={ref}
        contentContainerStyle={styles.cont}
        keyExtractor={(_, index) => index}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onMomentumScrollEnd={updateCurrentSlideIndex}
        data={ONBOARD_DATA}
        renderItem={({item}) => (
          <View style={styles.main}>
            <View style={styles.annimView}>
              <LottieView source={item.annimation} autoPlay loop />
            </View>
            <View>
              <Text style={styles.heading}>{item.title} </Text>
              <Text style={styles.body}>{item.body}</Text>
            </View>
          </View>
        )}
      />

      <FooterComponent
        goToNextSlide={goToNextSlide}
        goToPrevSlide={goToPrevSlide}
        currentElemIndex={currentElemIndex}
      />
    </SafeAreaView>
  );
};

export default Onboard;

const FooterComponent = ({currentElemIndex, goToNextSlide, goToPrevSlide}) => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.iconView} onPress={goToPrevSlide}>
        <Feather name="arrow-left" size={22} color="#493997" />
      </TouchableOpacity>
      <View style={styles.indicatorView}>
        {ONBOARD_DATA.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              currentElemIndex === index && {
                backgroundColor: '#493997',
                width: 25,
              },
            ]}></View>
        ))}
      </View>
      <TouchableOpacity
        onPress={goToNextSlide}
        style={[styles.iconView, styles.rightIcon]}>
        <Feather name="arrow-right" size={22} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};
