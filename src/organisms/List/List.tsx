import React from 'react';
import Card from '../../molecules/Card';
import Text from '../../atoms/Text';
import { Row } from './List.styles';
import CenteredContainer from '../../atoms/CenteredContainer';
import useAsyncData from '../../hooks/useAsyncData';

interface Props<T> {
    initialData?: T[],
    getData?: () => T[],
    renderItem: (item: T) => React.ReactNode
};

const List = <T extends object>(props: Props<T>) => {
    const { initialData, renderItem, getData } = props;
    
    const data = useAsyncData(getData, initialData);

    const renderItems = () => {
        return (data ?
            data.map((item, index) =>
                <Row key={index}>
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
