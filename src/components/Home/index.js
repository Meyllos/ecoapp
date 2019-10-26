import React from 'react';
import {ActivityIndicator, ScrollView, Text} from 'react-native';
import {withNavigation} from 'react-navigation';
import Posts from '../Posts';
import styles from './styles';

const Home = ({navigation, loading, posts, setPage, page}) => {
  return (
    <ScrollView>
      <Text style={styles.title}>Actualité</Text>
      {loading ? (
        <ActivityIndicator size={60} />
      ) : (
        <Posts posts={posts} setPage={setPage} page={page} />
      )}
    </ScrollView>
  );
};

export default withNavigation(Home);
