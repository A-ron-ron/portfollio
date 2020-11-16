import React, { useState } from 'react';
import { Contact } from '../components';

export function ContactContainer() {

  const [emailAddress, setEmailAddress] = useState('');
  const [querry, setQuerry] = useState('');

    return (
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
    )
}
