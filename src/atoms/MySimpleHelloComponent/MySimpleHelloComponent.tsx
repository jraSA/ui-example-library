import React from 'react';
import { Message } from './MySimpleHelloComponent.styles';

interface Props {
    message: string
};

const MySimpleHelloComponent = (props: Props) => {
    const { message } = props;
    return (
        <Message>
            {message}
        </Message>
    )
};

export default MySimpleHelloComponent;
