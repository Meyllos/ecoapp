import React from 'react';
import {shallow} from '../../config/enzymeConfig';
import '../../__mocks__/react-navigation';
import Header from '.';

const props = {
  navigation: {navigate: jest.fn()},
};

describe('<Header />', () => {
  test('should render without crashing', () => {
    const wrapper = shallow(<Header {...props} />);
    const {leftComponent, centerComponent, rightComponent} = wrapper.props();
    leftComponent.props.onPress();

    centerComponent.props.children.forEach(child => {
      child.props.children.props.onPress();
    });
    rightComponent.props.children.forEach(child => {
      return child.props.onPress && child.props.onPress();
    });
    expect(wrapper).toHaveLength(1);
  });
});
