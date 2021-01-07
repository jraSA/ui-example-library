import React from 'react';
import { TextContainer } from './Text.styles';

interface Props {
    value: string
};

const Text = (props: Props) => {
    const { value } = props;
    return (
        <TextContainer>
            {value}
        </TextContainer>
    )
};

export default Text;
