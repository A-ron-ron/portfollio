import React, { useState, useEffect } from 'react';
import { Contact } from '../components';
import { CSSTransition } from "react-transition-group";

export function ContactContainer() {

  const [emailAddress, setEmailAddress] = useState('');
  const [querry, setQuerry] = useState('');
  const [fadeIn, setFadeIn] = useState(false)

  useEffect((fadeIn) => {
    setFadeIn(!fadeIn)
  }, [])

    return (
      <CSSTransition
        in={fadeIn}
        classNames={'fade'}
        timeout={600}
      >
        <Contact.Container>
            <Contact.Base onSubmit="" method="POST" data-netlify="true">
            <Contact.Title>Get in touch</Contact.Title>
                <Contact.Input
                    placeholder="Email address"
                    value={emailAddress}
                    onChange={({ target }) => setEmailAddress(target.value)}
                />
                <Contact.Input
                    type="querry"
                    value={querry}
                    placeholder="Please type your enquiery here"
                    onChange={({ target }) => setQuerry(target.value)}
                    rows="10"
                    maxlength="3000"
                />
                <Contact.Submit type="submit" disabled={!emailAddress && !querry}>
                    Submit
                </Contact.Submit>
            </Contact.Base>
        </Contact.Container>
    </CSSTransition>
    )
}
