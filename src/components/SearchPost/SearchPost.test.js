import React from 'react';
import {shallow} from '../../config/enzymeConfig';
import '../../__mocks__/react-navigation';
import SearchPost from '.';

const props = {
  isSearchBarVisible: true,
  setSearchBarVisible: jest.fn(),
  loading: false,
  search: 'query',
  setSearch: jest.fn(),
  posts: [],
};

describe('<SearchPost />', () => {
  test('should render without crashing', () => {
    const wrapper = shallow(<SearchPost {...props} />);
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
