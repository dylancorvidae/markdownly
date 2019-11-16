import React from 'react';
import { shallow } from 'enzyme';
import Preview from './Preview';

describe('Preview component', () => {
  it('renders Preview', () => {
    const wrapper = shallow(<Preview markdown={'hello'} />);
    expect(wrapper).toMatchSnapshot();
  });
});
