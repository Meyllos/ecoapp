import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {withNavigation} from 'react-navigation';
import SinglePost from '../../components/SinglePost';
import {getSinglePost} from '../../redux/actions/posts';

export const SinglePostContainer = ({navigation}) => {
  const postId = navigation.getParam('postId');
  const dispatch = useDispatch();
  const {allPosts, singlePost, loading} = useSelector(({posts}) => posts);
  const post = allPosts.filter(onePost => onePost.id === postId)[0];

  useEffect(() => {
    if (!post) {
      dispatch(getSinglePost(postId));
    }
  }, [dispatch, post, postId]);

  return <SinglePost loading={loading} post={post || singlePost} />;
};

export default withNavigation(SinglePostContainer);
