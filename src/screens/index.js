import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';

import Header from '../components/Header';
import Home from '../containers/Home';
import Bookmarks from '../components/Bookmarks';
import Categories from '../containers/Categories';
import SinglePost from '../containers/SinglePost';

const MainNavigator = createStackNavigator(
  {
    Accueil: {screen: Home},
    Signets: {screen: Bookmarks},
    Categories: {screen: Categories},
    SinglePost: {screen: SinglePost},
  },
  {
    initialRouteName: 'Accueil',
    defaultNavigationOptions: ({navigation}) => ({
      header: headerProps => (
        <Header navigation={navigation} {...headerProps} />
      ),
      animationEnabled: true,
    }),
    navigationOptions: {
      animationEnabled: true,
    },
    headerTransitionPreset: 'fade-in-place',
    transitionConfig: () => ({
      transitionSpec: {
        duration: 1,
      },
    }),
  },
);

export default MainNavigator;
