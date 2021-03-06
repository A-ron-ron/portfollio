import styled, { css } from 'styled-components';

export const Item = styled.div`
    display: flex;
    border-bottom: 8px solid #222;
    padding: 50px 5%;
    overflow: hidden;
    padding-bottom: 2em;
`;

export const Inner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    max-width: 1500px;
    margin: auto;
    width: 100%;

    @media (max-width: 1000px) {
        flex-direction: column;
    }
`;

export const Pane = styled.div`
    width: 100%;
    /* height: 42vh; */
    text-align: center;
    margin-top: 1em;

    @media (min-width: 1000px) {
        padding: 0 5em;
    }
`;

export const Container = styled.section`


    &.fade-enter {
        opacity: 0;
    }
    &.fade-enter.fade-enter-active {
        opacity: .5;
        transition: opacity 600ms ease-in;
    }
    &.fade-enter-done{
      opacity: 1;
    }
    &.fade-exit {
        opacity: 1;
    }

    &.fade-exit.fade-exit-active {
        opacity: 0.5;
        transition: opacity 600ms ease-in;
    }
    &.fade-exit-done{
      opacity 0;
    }

    @media (max-width: 1000px) {
        ${Item}:last-of-type h2 {
            margin-bottom: 50px;
        }
    }
`;

export const Title = styled.h1`
    font-size: 50px;
    line-height: 1.1;
    margin-bottom: 1em;

    @media (max-width: 600px) {
        font-size: 35px;
    }
`;

export const Img = styled.img`
    max-width: 50%;
    height: auto;
    margin-top: 0;
    padding-top: 0;
    margin-bottom: 2em;
    z-index: 2;
    transition: all 1s ease;

    @media (min-width: 1000px) {
        max-width: 90%;
    }

`;

export const Text = styled.h2`
    font-size: 26px;
    color: ${({theme}) => theme.thigh};
    font-weight: normal;
    line-height: normal;
    margin-bottom: 0;

    @media (max-width: 600px) {
        font-size: 18px;
    }
`;
