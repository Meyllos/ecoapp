import React from 'react';
import {PropTypes} from 'prop-types';
import {Text, TouchableOpacity, ScrollView} from 'react-native';
import {withNavigation} from 'react-navigation';
import styles from './styles';

const Categories = ({navigation, categories}) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.screenTitle}>Catégories</Text>
      {categories.map((category, key) => (
        <TouchableOpacity
          key={key}
          style={styles.categoryContainer}
          onPress={() =>
            navigation.navigate('Posts', {
              categoryId: category.id,
              categoryName: category.name,
            })
          }>
          <Text style={styles.categoryTitle}>{category.name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

Categories.propTypes = {
  navigation: PropTypes.object,
  categories: PropTypes.array,
};
Categories.defaultProps = {categories: [], page: 1};

export default withNavigation(Categories);
