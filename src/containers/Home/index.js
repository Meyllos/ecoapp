import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {withNavigation} from 'react-navigation';
import Home from '../../components/Home';
import {getPosts} from '../../redux/actions/posts';

export const HomeContainer = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const {allPosts, loading} = useSelector(({posts}) => posts);

  useEffect(() => {
    dispatch(getPosts(`?per_page=10&page=${page}`));
  }, [dispatch, page]);

  return (
    <Home loading={loading} posts={allPosts} setPage={setPage} page={page} />
  );
};

export default withNavigation(HomeContainer);
