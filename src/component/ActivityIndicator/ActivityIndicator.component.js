import React from 'react';
import {View, ActivityIndicator as AI} from 'react-native';
import theme from '../../theme';

const ActivityIndicator = () => {
  return (
    <View
      style={{
        marginVertical: 16,
        alignItems: 'center',
      }}>
      <AI size="small" color={theme.COLORS.PRIMARY} />
    </View>
  );
};

export default ActivityIndicator;
