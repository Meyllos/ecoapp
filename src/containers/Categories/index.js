import React, {Component} from 'react';
import {View} from 'react-native';
import {withNavigation} from 'react-navigation';
import Categories from '../../components/Categories';

export class CategoriesContainer extends Component {
  render() {
    return (
      <View>
        <Categories />
      </View>
    );
  }
}

export default withNavigation(CategoriesContainer);
