import React from 'react';
import {Provider} from 'react-redux';
import {mount} from '../../config/enzymeConfig';
import '../../__mocks__/react-navigation';
import store from '../../redux/store';
import Posts from '.';

const props = {
  navigation: {navigate: jest.fn(), getParam: jest.fn()},
};

describe('<Posts />', () => {
  test('should render without crashing', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Posts {...props} />
      </Provider>,
    );
    expect(wrapper).toHaveLength(1);
  });
});
