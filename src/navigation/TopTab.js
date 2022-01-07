import React from 'react';
import {Image} from 'react-native';
import {Mass, Seasons, Prayers} from '../component';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import theme from '../theme';

const Tab = createMaterialTopTabNavigator();

const TopTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarItemStyle: {
          flexDirection: 'row',
          paddingHorizontal: 15,
          alignItems: 'center',
        },
        tabBarActiveTintColor: theme.COLORS.PRIMARY,
        tabBarIndicatorStyle: {
          backgroundColor: theme.COLORS.PRIMARY,
        },
        labelStyle: {padding: 0, margin: 0, border: 0},
        tabStyle: {padding: 0, margin: 0, border: 0},
      }}>
      <Tab.Screen
        name="Prayers"
        options={{
          tabBarIconStyle: {
            paddingRight: 35,
          },

          tabBarIcon: () => (
            <Image
              source={require('../../assets/images/notebook-dynamic-premium.png')}
              style={{
                width: 30,
                height: 30,
                alignSelf: 'flex-start',
                marginBottom: 11,
              }}
            />
          ),
        }}
        component={Prayers}
      />

      <Tab.Screen
        options={{
          tabBarIconStyle: {
            paddingRight: 35,
          },

          tabBarIcon: () => (
            <Image
              source={require('../../assets/images/Terra_perspective_matte_s.png')}
              style={{
                width: 30,
                height: 30,
                alignSelf: 'flex-start',
                marginBottom: 11,
              }}
            />
          ),
        }}
        name="Mass"
        component={Mass}
      />

      <Tab.Screen
        name="Seasons"
        options={{
          tabBarIconStyle: {
            paddingRight: 35,
          },

          tabBarIcon: () => (
            <Image
              source={require('../../assets/images/chart-dynamic-premium.png')}
              style={{
                width: 30,
                height: 30,
                alignSelf: 'flex-start',
                marginBottom: 11,
              }}
            />
          ),
        }}
        component={Seasons}
      />
    </Tab.Navigator>
  );
};

export default TopTab;
