import React from 'react';
import {shallow} from '../../config/enzymeConfig';
import '../../__mocks__/react-navigation';
import posts from '../../__mocks__/posts';
import Posts from '.';

const props = {
  navigation: {navigate: jest.fn()},
  posts,
  setPage: jest.fn(),
  page: 1,
  onPostPress: jest.fn(),
};

describe('<Posts />', () => {
  test('should render without crashing', () => {
    const wrapper = shallow(<Posts {...props} />);
    const touchables = wrapper.find('TouchableOpacity');

    touchables.forEach(
      touchable => touchable.props().onPress && touchable.props().onPress(),
    );
    touchables.forEach(
      touchable =>
        touchable.props().children &&
        touchable.props().children.props &&
        touchable.props().children.props.onPress(),
    );
    expect(wrapper).toHaveLength(1);
  });
});
