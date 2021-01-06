import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import Card from '.';
import MySimpleHelloComponent from '../../atoms/MySimpleHelloComponent';

export default {
    title: 'Molecules/Card',
    component: Card,
} as Meta;

const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
    + "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

const Template = (args) => (
    <Card {...args}>
        <MySimpleHelloComponent message={text} />
    </Card>
);

export const SimpleCardWithoutTitle = Template.bind({});


export const SimpleCardWithTitle = Template.bind({});
SimpleCardWithTitle.args = { title: 'My title' };