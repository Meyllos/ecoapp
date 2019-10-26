import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {withNavigation} from 'react-navigation';
import Posts from '../../components/Posts';

export class PostsContainer extends Component {
  render() {
    return (
      <View>
        <Posts />
      </View>
    );
  }
}

export default withNavigation(PostsContainer);
