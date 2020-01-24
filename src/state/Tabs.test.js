import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Accordion from './Tabs';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({
  adapter: new Adapter()
});

describe.skip(`Tabs Component`, () => {
  const tabsProp = [
    {
      name: 'First tab',
      content: 'Lorem ipsum dolor sit...'
    },
    {
      name: 'Second tab',
      content: 'Laboriosam exercitationem quos...'
    },
    {
      name: 'Third tab',
      content: 'Fugit, sapiente aspernatur...'
    },
  ];

  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Accordion />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('renders the first tab by default', () => {
    const tree = renderer
      .create(<Accordion tabs={tabsProp} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders empty given no tabs', () => {
    const wrapper = shallow(<Accordion />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})