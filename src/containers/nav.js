import React, { useContext } from 'react';
import * as ROUTES from '../constants/routes';
import { Nav } from '../components';
import { Context } from '../context'

export function NavContainer() {

  const {theme, setTheme, useTheme, themeCreator, fadeIn, setFadeIn} = useContext(Context)

  function fadeChange(e){
    setFadeIn(!fadeIn)
  }

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

                    <Nav.Link to={ROUTES.HOME} onChange={fadeChange}><Nav.Logo to={ROUTES.PORT} src={process.env.PUBLIC_URL + "content/croppedWide.gif"} alt="Logo wide cropped" /></ Nav.Link>

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
                        <Nav.Link to={ROUTES.PORT} onChange={fadeChange}> <Nav.PortL>Showcase</Nav.PortL></ Nav.Link>
                        <Nav.Link to={ROUTES.CONTACT} onChange={fadeChange}> <Nav.ContactL to="#contact" >Contact</Nav.ContactL> </Nav.Link>
                    </Nav.Pane>
        </Nav.Container>
    )
}
