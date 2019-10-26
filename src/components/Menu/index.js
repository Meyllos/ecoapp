import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Icon, Button} from 'react-native-elements';
import {withNavigation} from 'react-navigation';
import styles from './styles';

const menus = [
  {title: 'Accueil', icon: 'home'},
  {title: 'Signets', icon: 'bookmark'},
  {title: 'Categories', icon: 'list'},
];

const renderButton = (title, routeName, icon, showScreen) => (
  <TouchableOpacity key={title}>
    <Button
      title={title}
      titleStyle={styles.btnTitleStyle}
      buttonStyle={
        title.toLowerCase() === routeName.toLowerCase()
          ? styles.menuBtnActive
          : styles.menuBtn
      }
      onPress={() => showScreen(title)}
      icon={<Icon name={icon} iconStyle={styles.menuBtnIcon} />}
    />
  </TouchableOpacity>
);

const Menu = ({navigation, showMenu}) => {
  const {routeName} = navigation.state;
  const showScreen = screen => navigation.navigate(screen) && showMenu(false);

  return (
    <View style={styles.container}>
      {menus.map(({title, icon}) =>
        renderButton(title, routeName, icon, showScreen),
      )}
    </View>
  );
};

export default withNavigation(Menu);
