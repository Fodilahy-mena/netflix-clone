import React from 'react';
import {Container, Title, List, Name, Picture, Item} from './styles/profiles';

export default function Profile({children, ...restProps}) {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}
Profile.Title = function ProfileTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}

Profile.List = function ProfileList({children, ...restProps}) {
    return <List {...restProps}>{children}</List>
}

Profile.User = function ProfileUser({children, ...restProps}) {
    return <Item {...restProps}>{children}</Item>
}

Profile.Name = function ProfileName({children, ...restProps}) {
    return <Name {...restProps}>{children}</Name>
}

Profile.Picture = function ProfilePicture({src, ...restProps}) {
    return <Picture {...restProps} src={src ? `/images/users/${src}.png` : `/images/misc/loading.gif`}/>
}
