import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {withNavigation} from 'react-navigation';
import SearchPost from '../../components/SearchPost';
import {searchPost} from '../../redux/actions/posts';

export const SearchPostContainer = ({navigation}) => {
  const [search, setSearch] = useState('');
  const [isSearchBarVisible, setSearchBarVisible] = useState(false);
  const dispatch = useDispatch();
  const {
    searchPost: {results, loading},
  } = useSelector(({posts}) => posts);

  useEffect(() => {
    if (search) {
      dispatch(searchPost(`?search=${search}`));
    }
  }, [search, dispatch, isSearchBarVisible]);

  return (
    <SearchPost
      search={search}
      setSearch={setSearch}
      posts={search ? results : []}
      loading={loading}
      isSearchBarVisible={isSearchBarVisible}
      setSearchBarVisible={setSearchBarVisible}
    />
  );
};

export default withNavigation(SearchPostContainer);
