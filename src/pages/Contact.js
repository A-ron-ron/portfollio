import React from 'react';
import { NavContainer } from '../containers/nav';
import { ContactContainer } from '../containers/contact';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

export default function Home() {
    return (
      <>
            <NavContainer />
            <ContactContainer />
      </>
      )
}
