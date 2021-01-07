import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import List from '.';
import Text from '../../atoms/Text'

export default {
    title: 'Organisms/List',
    component: List,
} as Meta;

interface MyMockData {
    text: string
}

const myFooData: Array<MyMockData> = [
    { text: 'foo-1' },
    { text: 'foo-2' },
    { text: 'foo-3' }
];


const myBooData: Array<MyMockData> = [
    { text: 'boo-1' },
    { text: 'boo-2' },
    { text: 'boo-3' }
];

const renderItem = (item: MyMockData) => {
    return <Text>{item.text}</Text>;
}

const getData = () => {
    return myBooData;
}

const Template = (args) => <List {...args} />;

export const ListComponentWithoutData = Template.bind({});
ListComponentWithoutData.args = {
    renderItem: renderItem,
};

export const ListComponentWithIntialData = Template.bind({});
ListComponentWithIntialData.args = {
    renderItem: renderItem,
    initialData: myFooData
};

export const ListComponentWithGetData = Template.bind({});
ListComponentWithGetData.args = {
    renderItem: renderItem,
    getData: getData
};
