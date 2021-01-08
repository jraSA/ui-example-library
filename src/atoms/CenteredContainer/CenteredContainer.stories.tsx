import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import CenteredContainer from '.';
import Text from '../Text';

export default {
    title: 'Atoms/CenteredContainer',
    component: CenteredContainer,
} as Meta;

const Template = () => <CenteredContainer><Text>My text</Text></CenteredContainer>;

export const CenteredContainerComponent = Template.bind({});
