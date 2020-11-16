import React, { component } from 'react';
import Home from './pages/home';
import Port from './pages/port';
import Contact from './pages/contact';
import * as ROUTES from './constants/routes';
import styled, { keyframes } from "styled-components";
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";


function App({location}) {
  return (
    <Router>
            <Wrapper>
              <TransitionGroup component={null}>
                <CSSTransition
                  classNames={'fade'}
                  timeout={{enter: 500, exit: 300}}
                >
                   <Switch location={location}>
                        <Route exact path={ROUTES.HOME}>
                            <Home />
                        </Route>
                        <Route exact path={ROUTES.PORT}>
                            <Port />
                        </Route>
                        <Route exact path={ROUTES.CONTACT}>
                            <Contact />
                        </Route>
                        <Route exact path={ROUTES.Netflix} component={() => {
                          window.location.href = 'https://arronflix.netlify.app/';
                          return null;
                        }} />
                        <Route exact path={ROUTES.Ft} component={() => {
                          window.location.href = 'https://frozen-time.netlify.app';
                          return null;
                        }} />
                        <Route exact path={ROUTES.Travel} component={() => {
                          window.location.href = 'https://elegant-ptolemy-cb8f50.netlify.app/';
                          return null;
                        }} />
                        <Route exact path={ROUTES.Ig} component={() => {
                          window.location.href = 'https://fervent-almeida-bfe39d.netlify.app';
                          return null;
                        }} />
                        <Route exact path={ROUTES.Speed} component={() => {
                          window.location.href = 'https://ultimatespeedtyper.netlify.app';
                          return null;
                        }} />
                        <Route exact path={ROUTES.Movie} component={() => {
                          window.location.href = 'https://film-a-base.netlify.app';
                          return null;
                        }} />
                        </Switch>
                </CSSTransition>
              </TransitionGroup>
            </ Wrapper>
    </Router>
  );
}

const Wrapper = styled.div`
    .fade-enter {
        opacity: 0.01;
    }
    .fade-enter.fade-enter-active {
        opacity: 1;
        transition: opacity 300ms ease-in;
    }
    .fade-exit {
        opacity: 1;
    }

    .fade-exit.fade-exit-active {
        opacity: 0.01;
        transition: opacity 300ms ease-in;
    }

    div.transition-group {
     position: relative;
    }

    section.route-section {
      position: absolute;
      width: 100%;
      top: 0;
      left: 0;
    }
`;


export default App;
