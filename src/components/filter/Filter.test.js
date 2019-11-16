import React from 'react';
import { shallow } from 'enzyme';
import Filter from './Filter';

describe('Filter component', () => {
  it('renders Filter', () => {
    const wrapper = shallow(<Filter handleSubmit={() => {}} handleChange={() => {}} searchTerm={'hello'} />);
    expect(wrapper).toMatchSnapshot();
  });
});
