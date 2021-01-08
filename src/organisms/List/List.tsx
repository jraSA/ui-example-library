import React, { useEffect, useState } from 'react';
import Card from '../../molecules/Card';
import Text from '../../atoms/Text';
import { Row } from './List.styles';
import CenteredContainer from '../../atoms/CenteredContainer';

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
            <CenteredContainer>
                <Text>loading!!</Text>
            </CenteredContainer>);
    };

    return (
        <div>
            {renderItems()}
        </div>
    );
};

export default List;
