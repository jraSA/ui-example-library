import React from 'react';
import renderer from 'react-test-renderer';
import Button from '.';

describe('Render test', () => {
    const wrapper = renderer.create(<Button>foo-boo</Button>);

    test('WHEN I render the component THEN it should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
