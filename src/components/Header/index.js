import React, {useState} from 'react';
import {View, Image, TouchableOpacity, Modal} from 'react-native';
import {Header, Icon, Button} from 'react-native-elements';
import Menu from '../Menu';
import SearchPost from '../../containers/SearchPost';
import logo from '../../assets/images/ecoapp.png';
import styles from './styles';

const HeaderComponent = ({navigation}) => {
  const [isMenuVisible, showMenu] = useState(false);
  return (
    <Header
      placement="right"
      leftComponent={
        <TouchableOpacity onPress={() => navigation.navigate('Accueil')}>
          <Image source={logo} style={styles.logo} />
        </TouchableOpacity>
      }
      centerComponent={
        <View style={styles.centerComponent}>
          <SearchPost />
          <TouchableOpacity>
            <Button
              titleStyle={styles.btnTitleStyle}
              onPress={() => showMenu(true)}
              icon={
                <Icon
                  iconStyle={styles.centerComponentBtnIcon}
                  name="more-vert"
                />
              }
            />
          </TouchableOpacity>
        </View>
      }
      rightComponent={
        <Modal
          animationType={'none'}
          transparent={true}
          visible={isMenuVisible}>
          <TouchableOpacity
            style={styles.rightComponentModal}
            onPress={() => showMenu(false)}
          />
          <Menu showMenu={showMenu} />
        </Modal>
      }
    />
  );
};

export default HeaderComponent;
