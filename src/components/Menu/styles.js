import {StyleSheet} from 'react-native';
import screenDimensions from '../../helpers/screenDimensions';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'flex-end',
    flexDirection: 'column',
    backgroundColor: '#fff',
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#ddd',
    position: 'absolute',
    width: screenDimensions.width / 2,
    shadowColor: '#000',
    shadowOffset: {width: 20, height: 20},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 20,
  },
  menuBtn: {
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
  btnTitleStyle: {
    fontSize: 13,
    textAlign: 'left',
    color: '#000',
  },
  menuBtnActive: {
    justifyContent: 'flex-start',
    backgroundColor: '#ddd',
  },
  menuBtnIcon: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#000',
  },
});
