import React from 'react';
import {shallow} from '../../config/enzymeConfig';
import '../../__mocks__/react-navigation';
import posts from '../../__mocks__/posts';
import SinglePost from '.';

const props = {
  post: posts[0],
  loading: false,
};

describe('<SinglePost />', () => {
  test('should render without crashing', () => {
    const wrapper = shallow(<SinglePost {...props} />);
    expect(wrapper).toHaveLength(1);
  });
});
