import React from 'react';
import {PropTypes} from 'prop-types';
import {
  Text,
  ActivityIndicator,
  Image,
  TouchableOpacity,
  ScrollView,
  View,
} from 'react-native';
import {Icon, Button} from 'react-native-elements';
import {withNavigation} from 'react-navigation';
import styles from './styles';

const Posts = ({
  navigation,
  posts,
  setPage,
  page,
  onPressPost,
  showPagination,
}) => {
  return (
    <ScrollView>
      {posts.map((post, key) => (
        <TouchableOpacity
          key={key}
          style={styles.postContainer}
          onPress={() => {
            navigation.navigate('SinglePost', {
              postId: post.id,
            });
            onPressPost();
          }}>
          <Text style={styles.postTitle}>{post.title.rendered}</Text>
          <Image
            source={{
              uri: post.jetpack_featured_media_url,
            }}
            style={styles.postImage}
            PlaceholderContent={<ActivityIndicator />}
          />
        </TouchableOpacity>
      ))}
      {posts.length >= 10 && showPagination ? (
        <View style={styles.paginationContainer}>
          <TouchableOpacity>
            <Button
              onPress={() => setPage(page > 1 ? page - 1 : page)}
              buttonStyle={
                page === 1 ? styles.paginationBtnDisabled : styles.paginationBtn
              }
              icon={
                <Icon iconStyle={styles.paginationIcon} name="chevron-left" />
              }
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Button
              onPress={() => setPage(page + 1)}
              buttonStyle={styles.paginationBtn}
              icon={
                <Icon iconStyle={styles.paginationIcon} name="chevron-right" />
              }
            />
          </TouchableOpacity>
        </View>
      ) : null}
    </ScrollView>
  );
};

Posts.propTypes = {
  navigation: PropTypes.object,
  posts: PropTypes.array,
  setPage: PropTypes.func,
  page: PropTypes.number,
};
Posts.defaultProps = {
  posts: [],
  showPagination: true,
  page: 1,
  onPressPost: () => true,
};

export default withNavigation(Posts);
