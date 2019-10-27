import React from 'react';
import {Provider} from 'react-redux';
import {mount} from '../../config/enzymeConfig';
import '../../__mocks__/react-navigation';
import store from '../../redux/store';
import Categories from '.';

describe('<Categories />', () => {
  test('should render without crashing', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Categories />
      </Provider>,
    );
    expect(wrapper).toHaveLength(1);
  });
});
