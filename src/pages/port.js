import React from 'react';
import { NavContainer } from '../containers/nav';
import { PortfolioContainer } from '../containers/portfolio';
import styled, { keyframes } from 'styled-components';

export default function Port() {

  const slideInRight = keyframes`
    from {
      -webkit-transform: translate3d(0, 0, -100%);
      transform: translate3d(0, 0, -100%);
      visibility: visible;
    }

    to {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  `;

  const slideOutRight = keyframes`
    from {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }

    to {
      visibility: hidden;
      -webkit-transform: translate3d(0, 0, -100%);
      transform: translate3d(0, 0, -100%);
    }
  `;


  const Page = styled.div`
  `;

  const PortPageElm = styled(Page)`
    &.page-enter {
      animation: ${slideInRight} 0.4s forwards;
    }
    &.page-exit {
      animation: ${slideOutRight} 0.4s forwards;
    }
  `;

    return (
      <>
            <NavContainer />
          <PortPageElm>
            <PortfolioContainer />
          </ PortPageElm>
      </>
      )
}
