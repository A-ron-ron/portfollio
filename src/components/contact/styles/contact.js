import styled from 'styled-components';
import { Link as ReachRouterLink } from 'react-router-dom';

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    height: 85vh;
    min-height: 660px;
    box-sizing: border-box;
    width: 100%;
    margin: auto;
`;

export const Error = styled.div`
    background: #e87c03;
    border-radius: 4px;
    font-size: 14px;
    margin: 0 0 16px;
    color: white;
    padding: 15px 20px;
`;

export const Base = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 300px;
    width: 70%;
    margin: auto;

    @media (min-width: 1000px){
      max-width: 900px;
    }
`;

export const Title = styled.h1`
    color: ${({theme}) => theme.ttheme};
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 28px;

    @media (min-width: 1000px){
      font-size: 3rem;
    }

    @media (min-width: 1500px){
      font-size: 4rem;
    }
`;

export const Link = styled(ReachRouterLink)`
    color: ${({theme}) => theme.thigh};
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

export const Input = styled.textarea`
    background: #333;
    border-radius: 4px;
    border: 0;
    color: ${({theme}) => theme.thigh};
    width: 100%;
    line-height: 1.2em;
    padding: 5px 20px;
    margin: 20px auto;

    &:last-of-type {
        margin-bottom: 30px;
    }

    @media (min-width: 1000px){
      font-size: 1rem;
    }

    @media (min-width: 1500px){
      font-size: 1.5rem;
    }
`;

export const Submit = styled.button`
    display: inline-block;
    width: max-content;
    background: ${({theme}) => theme.grad};
    border-radius: 10px;
    font-size: 2rem;
    font-weight: bold;
    margin: 0 auto 12px;
    padding: .5em 1.5em;
    border: 0;
    color: ${({theme}) => theme.thigh};
    cursor: pointer;

    &:disabled {
        opacity: 0.3;
    }

    @media (min-width: 1000px){
      font-size: 3rem;
    }

    @media (min-width: 1500px){
      font-size: 4rem;
    }
`;
