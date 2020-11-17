import styled from 'styled-components';

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
  height: 85vh;
  display: grid;
  grid-template-columns: 23% 44% 33%;
  grid-template-rows: 5% 15% 3% 3% 64% 15%;
  grid-template-areas:
  ". . ."
  "Title Title ."
  ". . ."
  ". . ."
  "Text Text Text"
  ". . .";


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

  @media (min-width: 700px) {
    grid-template-rows: 5% 15% 3% 10% 57% 15%;1
  }

  @media (min-width: 1000px) {
    grid-template-rows: 5% 25% 3% 5% 57% 10%;
  }

  @media (max-width: 1000px) and (orientation: landscape) {
    grid-template-rows: 5% 35% 3% 5% 52% 5%;
  }

  @media (min-width: 1600px) {
    grid-template-columns: 23% 34% 43%;
  }

`;

export const Item = styled.div`
    display: flex;
    border-bottom: 8px solid #222;
    color: white;
    overflow: hidden;
`;

export const Title = styled.h2`
    grid-area: Title;
    background: ${({theme}) => theme.grad};
    padding: .5em;
    padding-left: 1em;
    font-size: 1.4rem;
    line-height: 1.1;
    color: ${({theme}) => theme.thigh};
    border-radius: 0 50px 50px 0;

    @media (min-width: 700px) {
        font-size: 1.9rem;
    }

    @media (min-width: 1000px) {
        font-size: 2.3rem;
    }

    @media (min-width: 1400px) {
        font-size: 2.5rem;
    }

    @media (min-width: 1600px) {
        font-size: 3rem;
    }

`;

export const Img = styled.img`
    max-width: 100%;
    height: auto;
    grid-column-start: 2;
    grid-column-end: -1;
    grid-row-start: 4;
    grid-row-end: -1;
    object-fit: cover;
    z-index: 0;
    opacity: .2;
`;

export const Text = styled.h3`
    grid-area: Text;
    padding: 0 2em;
    margin: 0;
    font-size: 1rem;
    font-weight: normal;
    line-height: normal;
    color: ${({theme}) => theme.thigh};

    @media (min-width: 700px) {
        font-size: 1.5rem;
    }

    @media (min-width: 1000px) {
        font-size: 1.7rem;
    }

    @media (min-width: 1600px) {
        font-size: 2.2rem;
    }
`;
