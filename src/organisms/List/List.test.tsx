import React from 'react';
import renderer, { act } from 'react-test-renderer';
import List from '../List';
describe('List render test', () => {
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
        return <div>{item.text}</div>
    }
    const getData = jest.fn();
    it('WHEN I dont provide data or getData THEN I should render loading', () => {
        const myList = renderer.create(
            <List renderItem={renderItem} />
        ).toJSON();
        expect(myList).toMatchSnapshot();
    });

    it('WHEN I provide initialData THEN I should render the list', async () => {
        const myList = renderer.create(
            <List initialData={myFooData} renderItem={renderItem} />
        ).toJSON();
        expect(myList).toMatchSnapshot();
    });

    it('WHEN I provide initialData and getData THEN I should render the list with the initialData', () => {
        const myList = renderer.create(
            <List initialData={myFooData} getData={getData} renderItem={renderItem} />
        ).toJSON();
        expect(myList).toMatchSnapshot();
    });

    it('WHEN I provide getData THEN I should render the list with the getData values', async () => {
        getData.mockReturnValueOnce(myBooData);

        let myList;
        await act(async () => {
            myList = renderer.create(
                <List getData={getData} renderItem={renderItem} />
            );
        });

        expect(getData).toBeCalled();
        expect(myList).toMatchSnapshot();
    });
});