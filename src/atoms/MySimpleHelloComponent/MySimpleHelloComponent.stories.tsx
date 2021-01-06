import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import MySimpleHelloComponent from '.';

export default {
    title: 'Atoms/MySimpleHelloComponent',
    component: MySimpleHelloComponent,
} as Meta;

const Template = (args) => <MySimpleHelloComponent {...args} />;

export const SimpleTextComponent = Template.bind({});
SimpleTextComponent.args = {
    message: 'foo-boo',
};
