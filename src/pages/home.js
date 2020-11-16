import React from 'react';
import { NavContainer } from '../containers/nav';
import { AboutContainer } from '../containers/about';
import { LogoContainer } from '../containers/logo';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import styled, { keyframes } from 'styled-components';

export default function Home() {

  const slideInRight = keyframes`
    from {
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
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
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
    }
  `;

  const Page = styled.div``;

  const HomePageElm = styled(Page)`
    &.page-enter {
      animation: ${slideInRight} 0.2s forwards;
    }
    &.page-exit {
      animation: ${slideOutRight} 0.2s forwards;
    }
  `;

    return (
      <>
            <NavContainer />
          <HomePageElm>
            <AboutContainer />
          </ HomePageElm>
      </>
      )
}
