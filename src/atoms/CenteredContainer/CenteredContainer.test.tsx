import React from 'react';
import renderer from 'react-test-renderer';
import CenteredContainer from '.';

describe('Render test', () => {
    const wrapper = renderer.create(<CenteredContainer><div>foo-boo</div></CenteredContainer>);

    test('WHEN I render the component THEN it should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
