import React from 'react';
import { NavContainer } from '../containers/nav';
import { ContactContainer } from '../containers/contact';

export default function Home({location}) {

    return (
      <>
            <NavContainer />
            <ContactContainer />
      </>
      )
}
