import React, { useContext } from 'react';
import {
    Container,
    Error,
    Base,
    Title,
    Link,
    Input,
    Submit
} from './styles/contact';
import { Context } from '../../context'

export default function Contact({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Contact.Container = function LogoContainer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Contact.Base = function ContactBase({ children, ...restProps }) {
    return <Base {...restProps}>{children}</Base>;
}

Contact.Title = function ContactTitle({ children, ...restProps }) {
    const { useTheme } = useContext(Context)
    return <Title theme={useTheme} {...restProps}>{children}</Title>;
}

Contact.Link = function ContactLink({ children, ...restProps }) {
    const { useTheme } = useContext(Context)
    return <Link theme={useTheme} {...restProps}>{children}</Link>;
}

Contact.Error = function ContactError({ children, ...restProps }) {
    return <Error {...restProps}>{children}</Error>;
}

Contact.Input = function ContactInput({ children, ...restProps }) {
    const { useTheme } = useContext(Context)
    return <Input theme={useTheme} {...restProps}>{children}</Input>;
}

Contact.Submit = function ContactSubmit({ children, ...restProps }) {
    const { useTheme } = useContext(Context)
    return <Submit theme={useTheme} {...restProps}>{children}</Submit>
}
