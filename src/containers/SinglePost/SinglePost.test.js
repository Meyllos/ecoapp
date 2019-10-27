import React from 'react';
import {Provider} from 'react-redux';
import {mount} from '../../config/enzymeConfig';
import '../../__mocks__/react-navigation';
import store from '../../redux/store';
import SinglePost from '.';

const props = {
  navigation: {navigate: jest.fn(), getParam: jest.fn()},
};

describe('<SinglePost />', () => {
  test('should render without crashing', () => {
    const wrapper = mount(
      <Provider store={store}>
        <SinglePost {...props} />
      </Provider>,
    );
    expect(wrapper).toHaveLength(1);
  });
});
