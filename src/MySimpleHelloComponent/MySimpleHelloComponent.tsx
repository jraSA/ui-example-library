import React from 'react'

interface Props {
    message: string
}

const MySimpleHelloComponent = (props: Props) => {
    const { message } = props;
    return (
        <h1>
            {message}
        </h1>
    )
}

export default MySimpleHelloComponent;
