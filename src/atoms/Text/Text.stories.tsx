import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import Text from '.';

export default {
    title: 'Atoms/Text',
    component: Text,
} as Meta;

const Template = () => <Text>My text</Text>;

export const SimpleTextComponent = Template.bind({});
