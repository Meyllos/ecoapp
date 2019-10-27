import React from 'react';
import {View, TouchableOpacity, Modal, ActivityIndicator} from 'react-native';
import {Icon, Button, SearchBar} from 'react-native-elements';
import {withNavigation} from 'react-navigation';
import Posts from '../Posts';
import styles from './styles';

const SearchPost = ({
  isSearchBarVisible,
  setSearchBarVisible,
  loading,
  search,
  setSearch,
  posts,
}) => {
  return (
    <View>
      <TouchableOpacity>
        <Button
          titleStyle={styles.btnTitleStyle}
          onPress={() => setSearchBarVisible(true)}
          icon={<Icon iconStyle={styles.searchIcon} name="search" />}
        />
      </TouchableOpacity>
      <Modal
        animationType={'none'}
        transparent={false}
        visible={isSearchBarVisible}>
        <SearchBar
          placeholder="Je cherche..."
          lightTheme={true}
          inputStyle={styles.inputStyle}
          onChangeText={value => setSearch(value)}
          value={search}
          searchIcon={
            <Icon
              onPress={() => {
                setSearchBarVisible(false);
                setSearch('');
              }}
              name="arrow-back"
            />
          }
        />
        {loading ? (
          <ActivityIndicator size={60} />
        ) : (
          <Posts
            showPagination={false}
            onPressPost={() => {
              setSearchBarVisible(false);
              setSearch('');
            }}
            posts={posts}
          />
        )}
      </Modal>
    </View>
  );
};

export default withNavigation(SearchPost);
