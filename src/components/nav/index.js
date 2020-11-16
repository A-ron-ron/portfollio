import React, {useContext} from 'react';
import { Link as ReachRouterLink } from 'react-router-dom';
import { AboutL, PortL, ContactL, Logo, Inner, Item, Container, Pane, Link } from './styles/nav';
import { Context } from '../../context'


export default function Nav({ children, direction = 'row', ...restProps }) {

    return (
        <Item {...restProps}>
            <Inner direction={direction}>{children}</Inner>
        </Item>
    )
}

Nav.Container = function NavContainer({ children, ...restProps }) {
      return <Container {...restProps}>{children}</Container>;
  }

Nav.Pane = function NavPane({ children, ...restProps }) {
    return <Pane {...restProps}>{children}</Pane>;
}

Nav.PortL = function NavPortL({ children, ...restProps }) {
    const { useTheme } = useContext(Context)

    return <PortL theme={useTheme}{...restProps}>{children}</PortL>;
}

Nav.ContactL = function NavContactL({ children, ...restProps }) {
    const { useTheme } = useContext(Context)

    return <ContactL theme={useTheme} {...restProps}>{children}</ContactL>;
}

Nav.Logo = function NavLogo({ children, ...restProps }) {
    const { useTheme } = useContext(Context)

    return <Logo theme={useTheme} {...restProps}>{children}</Logo>;
  }

Nav.Link = function NavLink ({ children, ...restProps }) {
    const { useTheme } = useContext(Context)

    return <Link theme={useTheme} {...restProps}>{children}</ Link>
}
