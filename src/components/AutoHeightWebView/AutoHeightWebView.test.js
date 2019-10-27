import React from 'react';
import {shallow} from '../../config/enzymeConfig';
import '../../__mocks__/react-navigation';
import AutoHeightWebView from '.';

const props = {
  html: '<p>hello</p>',
};

describe('<AutoHeightWebView />', () => {
  test('should render without crashing', () => {
    const wrapper = shallow(<AutoHeightWebView {...props} />);
    expect(wrapper).toHaveLength(1);
  });
});
