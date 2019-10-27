import React from 'react';
import {shallow} from '../../config/enzymeConfig';
import '../../__mocks__/react-navigation';
import categories from '../../__mocks__/categories';
import Categories from '.';

const props = {
  navigation: {navigate: jest.fn()},
  categories,
};

describe('<Categories />', () => {
  test('should render without crashing', () => {
    const wrapper = shallow(<Categories {...props} />);
    const touchables = wrapper.find('TouchableOpacity');

    touchables.forEach(
      touchable => touchable.props().onPress && touchable.props().onPress(),
    );
    expect(wrapper).toHaveLength(1);
  });
});
