import React from 'react';
import {View, Text} from 'react-native';
import {withNavigation} from 'react-navigation';

const Categories = ({navigation}) => {
  return (
    <View>
      <Text>Categories</Text>
    </View>
  );
};

export default withNavigation(Categories);
