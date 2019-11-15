import React from 'react';
import { shallow } from 'enzyme';
import TabDeck from './TabDeck';

describe('TabDeck component', () => {
  it('renders TabDeck', () => {
    const wrapper = shallow(<TabDeck titles={[]} handleDelete={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });
});
