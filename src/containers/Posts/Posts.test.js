import React from 'react';
import {shallow} from '../../config/enzymeConfig';
import '../../__mocks__/react-navigation';
import Posts from '.';

describe('<Posts />', () => {
  test('should render without crashing', () => {
    const wrapper = shallow(<Posts />);
    expect(wrapper).toHaveLength(1);
  });
});
