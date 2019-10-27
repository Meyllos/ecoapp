import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {withNavigation} from 'react-navigation';
import Categories from '../../components/Categories';
import {getCategories} from '../../redux/actions/categories';

export const CategoriesContainer = () => {
  const dispatch = useDispatch();
  const {allCategories, loading} = useSelector(({categories}) => categories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return <Categories loading={loading} categories={allCategories} />;
};

export default withNavigation(CategoriesContainer);
