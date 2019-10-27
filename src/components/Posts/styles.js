import {StyleSheet} from 'react-native';
import screenDimensions from '../../helpers/screenDimensions';

export default StyleSheet.create({
  postContainer: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 5,
    borderColor: '#ddd',
    borderWidth: 1,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  postTitle: {
    width: screenDimensions.width / 1.3 - 10,
    overflow: 'visible',
    flexWrap: 'wrap',
    fontWeight: 'bold',
  },
  postImage: {
    width: screenDimensions.width / 4 - 15,
    height: screenDimensions.width / 5 - 5,
    flexWrap: 'wrap',
  },
  paginationContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  paginationBtn: {
    margin: 10,
  },
  paginationBtnDisabled: {
    margin: 10,
    opacity: 0.5,
  },
  paginationIcon: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
});
