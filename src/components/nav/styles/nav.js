import styled from 'styled-components';
import { Link as ReachRouterLink } from 'react-router-dom';

export const Item = styled.div`
position: -webkit-sticky;
position: sticky;
top: 0;
    display: flex;
    border-bottom: 8px solid #222;
    padding: 50px 5%;
    color: white;
    overflow: hidden;
`;

export const Inner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: ${({ direction }) => direction};
    max-width: 1100px;
    margin: auto;
    width: 100%;

    @media (max-width: 1000px) {
        flex-direction: column;
    }
`;

export const Container = styled.section`
  height: 15vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom:#202020 solid 3px;
`;

export const Link = styled(ReachRouterLink)`
  padding: 0;
  margin: 0;
  max-width: 30%;
  text-decoration: none;

  &:visited{
    color: ${({theme}) => theme.ttheme};
  }
  &:link{
    color: ${({theme}) => theme.ttheme};
  }
  &:active{
    color: ${({theme}) => theme.ttheme};
  }
`;

export const Logo = styled.img`
    max-height: 13vh;
    background: ${({theme}) => theme.grad};
    border-radius: 50px;

    @media (max-width: 500px){
      max-width: 100%;
      height: auto;
    }
`;


export const Pane = styled.div`
    width: 60%;
    display: flex;
    justify-content: space-around;
    align-items: center;

`;


export const PortL = styled.h2`
    font-size: 18px;
    font-weight: normal;
    line-height: normal;
    cursor: pointer;
    text-decoration: none;

    &:visited{
      color: ${({theme}) => theme.ttheme};
    }
    &:link{
      color: ${({theme}) => theme.ttheme};
    }
    &:active{
      color: ${({theme}) => theme.ttheme};
    }


    @media (min-width: 600px) {
        font-size: 26px;
    }

    @media (min-width: 1200px) {
        font-size: 34px;
    }

    @media (min-width: 2000px) {
        font-size: 42px;
    }
`;

export const ContactL = styled.h2`
    font-size: 18px;
    font-weight: normal;
    line-height: normal;
    cursor: pointer;
    text-decoration: none;

    &:visited{
      color: ${({theme}) => theme.ttheme};
    }
    &:link{
      color: ${({theme}) => theme.ttheme};
    }
    &:active{
      color: ${({theme}) => theme.ttheme};
    }

    @media (min-width: 600px) {
        font-size: 26px;
    }

    @media (min-width: 1200px) {
        font-size: 34px;
    }

    @media (min-width: 2000px) {
        font-size: 42px;
    }
`;
