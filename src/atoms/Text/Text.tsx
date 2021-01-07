import React from 'react';
import { TextContainer } from './Text.styles';

interface Props {
    children: string
};

const Text = (props: Props) => {
    const { children } = props;
    return (
        <TextContainer>
            {children}
        </TextContainer>
    )
};

export default Text;
