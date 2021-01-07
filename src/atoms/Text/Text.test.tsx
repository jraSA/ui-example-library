import React from 'react';
import renderer from 'react-test-renderer';
import Text from '.';

describe('Render test', () => {
  const wrapper = renderer.create(<Text value={'foo-boo'} />);

  test('WHEN I render the component THEN it should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
