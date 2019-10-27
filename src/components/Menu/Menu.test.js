import React from 'react';
import {shallow} from '../../config/enzymeConfig';
import '../../__mocks__/react-navigation';
import Menu from '.';

const props = {
  navigation: {navigate: jest.fn(), state: {routeName: 'Accueil'}},
  showMenu: jest.fn(),
};

describe('<Menu />', () => {
  test('should render without crashing', () => {
    const wrapper = shallow(<Menu {...props} />);
    const touchables = wrapper.find('TouchableOpacity');
    touchables.forEach(touchable => touchable.props().children.props.onPress());
    expect(wrapper).toHaveLength(1);
  });
});
