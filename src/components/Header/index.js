import React, {useState} from 'react';
import {View, Image, TouchableOpacity, Alert, Modal} from 'react-native';
import {Header, Icon, Button} from 'react-native-elements';
import Menu from '../Menu';
import logo from '../../assets/images/ecoapp.png';
import styles from './styles';

const HeaderComponent = ({navigation}) => {
  const [isMenuVisible, showMenu] = useState(false);
  return (
    <View>
      <Header
        placement="right"
        leftComponent={
          <TouchableOpacity onPress={() => navigation.navigate('Accueil')}>
            <Image source={logo} style={styles.logo} />
          </TouchableOpacity>
        }
        centerComponent={
          <View style={styles.centerComponent}>
            <TouchableOpacity>
              <Button
                titleStyle={styles.btnTitleStyle}
                onPress={() => Alert.alert('search')}
                icon={
                  <Icon
                    iconStyle={styles.centerComponentBtnIcon}
                    name="search"
                  />
                }
              />
            </TouchableOpacity>
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
            visible={isMenuVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
            }}>
            <TouchableOpacity
              style={styles.rightComponentModal}
              onPress={() => showMenu(false)}
            />
            <Menu showMenu={showMenu} />
          </Modal>
        }
      />
    </View>
  );
};

export default HeaderComponent;
