import React, { useEffect, useState } from 'react';
import Card from '../../molecules/Card';
import { Row } from './List.styles';

interface Props<T> {
    initialData?: T[],
    getData?: () => T[],
    renderItem: (item: T) => React.ReactNode
};

const List = <T extends object>(props: Props<T>) => {
    const { initialData, renderItem, getData } = props;
    const [data, setData] = useState(initialData)

    useEffect(() => {
        if (getData && !data) {
            const getNewData = async () => {
                const newData = await getData();
                setData(newData);
            }
            getNewData();
        }
    }, [data])

    const renderItems = () => {
        return (data ?
            data.map(item =>
                <Row key={JSON.stringify(item)}>
                    <Card>
                        {renderItem(item)}
                    </Card>
                </Row>
            ) :
            <div>loading!!</div>);
    };

    return (
        <ul>
            {renderItems()}
        </ul>
    );
};

export default List;
