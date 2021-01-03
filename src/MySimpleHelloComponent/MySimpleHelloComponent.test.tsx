import React from 'react';
import renderer from 'react-test-renderer';
import MySimpleHelloComponent from '../MySimpleHelloComponent';

describe('Render test', () => {
  const wrapper = renderer.create(<MySimpleHelloComponent message={'foo-boo'} />);

  test('WHEN I render the component THEN it should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
