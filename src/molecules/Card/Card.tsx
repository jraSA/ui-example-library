import React from 'react';
import CenteredContainer from '../../atoms/CenteredContainer';
import { CardFrame, Title } from './Card.styles';

interface Props {
    title?: string,
    children?: React.ReactNode
}

const renderTitle = (title: string | undefined): React.ReactNode => {
    return title && <Title>{title}</Title>;
};

const Card = (props: Props) => {
    const { children, title } = props;
    return (
        <CenteredContainer>
            <CardFrame>
                {renderTitle(title)}
                <CenteredContainer>
                    {children}
                </CenteredContainer>
            </CardFrame>
        </CenteredContainer>
    )
};

export default Card;


