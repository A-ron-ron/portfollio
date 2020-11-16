import React, { useContext } from 'react';
import { Title, Text, Img, Inner, Item, Container } from './styles/about';
import { Context } from '../../context'

export default function About({ children, direction = 'row', ...restProps }) {
    return (
        <Item {...restProps}>
            <Inner direction={direction}>{children}</Inner>
        </Item>
    )
}

About.Title = function AboutTitle({ children, ...restProps }) {
    const { useTheme } = useContext(Context)
    return <Title theme={useTheme} {...restProps}>{children}</Title>;
}

About.Text = function AboutText({ children, ...restProps }) {
    const { useTheme } = useContext(Context)
    return <Text theme={useTheme} {...restProps}>{children}</Text>;
}

About.Img = function AboutImg({ children, ...restProps }) {
    return <Img {...restProps}>{children}</Img>;
  }

  About.Container = function AboutContainer({ children, ...restProps }) {
      return <Container {...restProps}>{children}</Container>;
  }
