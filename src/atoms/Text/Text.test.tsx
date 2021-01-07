import React from 'react';
import renderer from 'react-test-renderer';
import Text from '.';

describe('Render test', () => {
  const wrapper = renderer.create(<Text>{'foo-boo'}</Text>);

  test('WHEN I render the component THEN it should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
