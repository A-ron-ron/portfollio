import React, { useContext } from 'react';
import { Title, Text, Img, Inner, Item, Container, Pane } from './styles/portfolio';
import { Context } from '../../context'


export default function Portfolio({ children, direction = 'row', ...restProps }) {
    return (
        <Item {...restProps}>
            <Inner direction={direction}>{children}</Inner>
        </Item>
    )
}

Portfolio.Title = function PortfolioTitle({ children, ...restProps }) {
    return <Title {...restProps}> {children}</Title>;
}

Portfolio.Text = function PortfolioText({ children, ...restProps }) {
    const { useTheme } = useContext(Context)
    return <Text theme={useTheme} {...restProps}> {children}</Text>;
}

Portfolio.Img = function PortfolioImg({ children, ...restProps }) {
    return <Img {...restProps}>{children}</Img>;
  }
  Portfolio.Container = function PortfolioContainer({ children, ...restProps }) {
        return <Container {...restProps}>{children}</Container>;
    }

    Portfolio.Pane = function PortfolioPane({ children, ...restProps }) {
        return <Pane {...restProps}>{children}</Pane>;
    }
