import React from 'react';
import Home from './pages/home';
import Port from './pages/port';
import Contact from './pages/contact';
import * as ROUTES from './constants/routes';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
                   <Switch>
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
    </Router>
  );
}


export default App;
