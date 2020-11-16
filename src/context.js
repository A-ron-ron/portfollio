import React, {useState, useEffect} from "react"
import { NavContainer } from './containers/nav'

const Context = React.createContext()

function ContextProvider({children}) {
  const [theme, setTheme] = useState('black')
  const [useTheme, setUseTheme] = useState(
    {grad: "linear-gradient(-45deg,#D9A566, #A66F3F)",
    bg: `linear-gradient(-45deg, #0F1010, #171819, #1A1B1D, #0F1010, #171819, #1A1B1D, #0F1010, #171819, #1A1B1D, #0F1010, #171819, #1A1B1D)`,
    thigh: `#E8E8E8`,
    ttheme: `#A66F3F`,}
  )

  console.log(useTheme)

  function themeSetter(value){
    setTheme(value)
    themeCreator(value)
  }

  function themeCreator (value) {
    if (value === "black"){
      setUseTheme(
      {
      grad: `linear-gradient(-45deg,#D9A566, #A66F3F)`,
      bg: `linear-gradient(-45deg, #0F1010, #171819, #1A1B1D, #0F1010, #171819, #1A1B1D, #0F1010, #171819, #1A1B1D, #0F1010, #171819, #1A1B1D)`,
      thigh: `#E8E8E8`,
      ttheme:`#A66F3F`}
      )
    }
    else if (value === "grey"){
      setUseTheme(
        {
        grad: `linear-gradient(-45deg, #E39F9F, #5E4242)`,
        bg: `#E8E8E8`,
        thigh: `#202020`,
        ttheme: `#202020`}
      )
    }
    else if (value === "teal"){
      setUseTheme(
        {
        grad: `#088db0`,
        bg: ` #ABD6D5`,
        thigh: `#F8FDE3`,
        ttheme: `#ADA682`}
      )
    }
    else if (value === "pastal"){
      setUseTheme(
        {
        grad: `linear-gradient(90deg, #94EFE5, #83D4BC, #68CEAF, #85D8C0, #4EC4A8)`,
        bg: `linear-gradient(-45deg, #EBE8E3, #E6E2DD, #CCC3BF, #C8BCB7, #B1A39F`,
        thigh: `#FCE585`,
        ttheme: `#006260`}
      )
    }
  }



    return (
        <Context.Provider value={{
            theme,
            setTheme,
            useTheme,
            themeCreator
        }}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}
