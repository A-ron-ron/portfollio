import React, { useState, useContext } from 'react';
import * as ROUTES from '../constants/routes';
import { Nav } from '../components';
import { Link } from "react-router-dom"
import { Context } from '../context'

export function NavContainer() {

  const {theme, setTheme, useTheme, themeCreator} = useContext(Context)

  function themeSetter(e) {
      const {value} = e.target
      setTheme(value)
      themeCreator(value)
  }

  const selStyle= {
    background: useTheme.grad
  }


    return (
        <Nav.Container>

                    <Nav.Link to={ROUTES.HOME}><Nav.Logo to={ROUTES.PORT} src={process.env.PUBLIC_URL + "content/croppedWide.gif"} alt="Logo wide cropped" /></ Nav.Link>

                    <select
                        value={theme}
                        name="themeSelecter"
                        onChange={themeSetter}
                        className="theme_select"
                        style={selStyle}
                    >
                            <option value="black">Black </option>
                            <option value="grey">Grey</option>
                            <option value="pastal">Pastal</option>
                            <option value="teal">Teal</option>
                    </select>
                    <Nav.Pane>
                        <Nav.Link to={ROUTES.PORT}> <Nav.PortL>Showcase</Nav.PortL></ Nav.Link>
                        <Nav.Link to={ROUTES.CONTACT}> <Nav.ContactL to="#contact" >Contact</Nav.ContactL> </Nav.Link>
                    </Nav.Pane>
        </Nav.Container>
    )
}
