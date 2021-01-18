import React from 'react';


export default function  jumbotron({
    children,
    direction= 'row',
    ...restProps}) {
    return (
        <Item {...restProps}>
            <Inner direction={direction}>
                {children}
            </Inner>
        </Item>
    )
}
