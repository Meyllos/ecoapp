import React from 'react';
import {View, Text} from 'react-native';
import {withNavigation} from 'react-navigation';

const Bookmarks = ({navigation}) => {
  return (
    <View>
      <Text>Bookmarks</Text>
    </View>
  );
};

export default withNavigation(Bookmarks);
