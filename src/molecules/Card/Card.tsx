import React from 'react';
import { CardFrame, Container, Content, Title } from './Card.styles';

interface Props {
    title?: string,
    children?: React.ReactNode
}

const Card = (props: Props) => {
    const { children, title } = props;
    return (
        <Container>
            <CardFrame>
                {renderTitle(title)}
                <Content>
                    {children}
                </Content>
            </CardFrame>
        </Container>
    )
};

export default Card;

const renderTitle = (title: string | undefined): React.ReactNode => {
    return title && <Title>{title}</Title>;
};
