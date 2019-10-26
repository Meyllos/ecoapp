import React from 'react';
import {shallow} from '../../config/enzymeConfig';
import '../../__mocks__/react-navigation';
import Home from '.';

const props = {
  loading: true,
  navigation: {navigate: jest.fn()},
  posts: [],
  setPage: jest.fn(),
  page: 1,
};

describe('<Home />', () => {
  test('should render without crashing', () => {
    const component = shallow(<Home {...props} />);
    expect(component).toHaveLength(1);
  });
  test('should display posts', () => {
    const component = shallow(<Home {...{...props, loading: false}} />);
    expect(component).toHaveLength(1);
  });
});
