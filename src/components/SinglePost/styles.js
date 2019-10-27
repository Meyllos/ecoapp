import {StyleSheet} from 'react-native';
import screenDimensions from '../../helpers/screenDimensions';

export default StyleSheet.create({
  postContainer: {
    flex: 1,
    flexDirection: 'column',
    paddingBottom: 50,
  },
  postTitle: {
    width: screenDimensions.width - 10,
    fontWeight: 'bold',
    fontSize: 20,
    padding: 10,
  },
  postImage: {
    width: screenDimensions.width,
    height: screenDimensions.width / 2,
  },
  bottomButtonsGroupContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    borderTopColor: '#ccc',
    borderTopWidth: 1,
    width: screenDimensions.width,
    backgroundColor: '#fff',
    bottom: 0,
    paddingLeft: 10,
    paddingRight: 10,
  },
  bottomButton: {
    margin: 5,
    backgroundColor: '#eee',
  },
  bottomButtonIcon: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
});
