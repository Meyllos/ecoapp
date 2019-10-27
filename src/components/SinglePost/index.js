import React from 'react';
import {
  Text,
  ActivityIndicator,
  Image,
  ScrollView,
  View,
  TouchableOpacity,
} from 'react-native';
import {Button, Icon} from 'react-native-elements';
import {withNavigation} from 'react-navigation';
import AutoHeightWebView from '../AutoHeightWebView';
import styles from './styles';

const SinglePost = ({post, loading}) => {
  return loading ? (
    <ActivityIndicator size={60} />
  ) : (
    <View>
      <ScrollView>
        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>
            {post.title ? post.title.rendered : ''}
          </Text>
          <Image
            source={{
              uri: post.jetpack_featured_media_url,
            }}
            style={styles.postImage}
            PlaceholderContent={<ActivityIndicator />}
          />
          <AutoHeightWebView html={post.content ? post.content.rendered : ''} />
        </View>
      </ScrollView>
      <View style={styles.bottomButtonsGroupContainer}>
        <TouchableOpacity>
          <Button
            buttonStyle={styles.bottomButton}
            icon={<Icon iconStyle={styles.paginationIcon} name="share" />}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Button
            buttonStyle={styles.bottomButton}
            icon={
              <Icon iconStyle={styles.paginationIcon} name="bookmark-border" />
            }
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default withNavigation(SinglePost);
