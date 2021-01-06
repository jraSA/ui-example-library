import React from 'react';
import renderer from 'react-test-renderer';
import Card from '.';

describe('Render test', () => {
    const wrapper = renderer.create(<Card></Card>);

    test('WHEN I render the component THEN it should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
});

describe('Render test with child', () => {
    const wrapper = renderer.create(<Card><div>Foo-boo</div></Card>);

    test('WHEN I render the component THEN it should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
});


describe('Render test with title', () => {
    const wrapper = renderer.create(<Card title={'Foo-title'}><div>Foo-boo</div></Card>);

    test('WHEN I render the component THEN it should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
});