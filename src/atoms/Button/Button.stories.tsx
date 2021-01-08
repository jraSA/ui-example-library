import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import Button from '.';

export default {
    title: 'Atoms/Button',
    component: Button,
} as Meta;

const Template = () => <Button>My text</Button>;

export const SimpleButtonComponent = Template.bind({});
