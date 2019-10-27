import React from 'react';
import {Provider} from 'react-redux';
import {mount} from '../../config/enzymeConfig';
import '../../__mocks__/react-navigation';
import store from '../../redux/store';
import Home from '.';

describe('<Home />', () => {
  test('should render without crashing', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Home />
      </Provider>,
    );
    expect(wrapper).toHaveLength(1);
  });
});
