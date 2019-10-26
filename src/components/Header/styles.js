import {StyleSheet} from 'react-native';
import screenDimensions from '../../helpers/screenDimensions';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  logo: {
    width: 49,
    height: 50.8,
    marginTop: -15,
  },
  centerComponent: {
    flex: 1,
    flexDirection: 'row',
  },
  centerComponentBtnIcon: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
  rightComponentModal: {
    width: screenDimensions.width,
    height: screenDimensions.height,
  },
});
