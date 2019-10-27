import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Text, ScrollView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {withNavigation} from 'react-navigation';
import Posts from '../../components/Posts';
import {getPosts} from '../../redux/actions/posts';
import styles from './styles';

export const PostsContainer = ({navigation}) => {
  const categoryId = navigation.getParam('categoryId');
  const categoryName = navigation.getParam('categoryName');
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const {allPosts, loading} = useSelector(({posts}) => posts);

  useEffect(() => {
    dispatch(getPosts(`?per_page=10&page=${page}&categories=${categoryId}`));
  }, [categoryId, dispatch, page]);

  return loading ? (
    <ActivityIndicator size={60} />
  ) : (
    <ScrollView>
      {categoryName ? (
        <Text style={styles.categoryName}>{categoryName}</Text>
      ) : null}
      <Posts posts={allPosts} setPage={setPage} page={page} />
    </ScrollView>
  );
};

export default withNavigation(PostsContainer);
