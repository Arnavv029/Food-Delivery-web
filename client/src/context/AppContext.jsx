import React, { createContext, useState } from 'react'
import { users } from '../assets/assets'

export const AppContext = createContext()

export const AppContextProvider = (props) => { 

    const currency = "$"

    const userinfo =  users 

    const [isuerLogin, setIsUserLogin] = useState(false)

    const value = {
        currency , userinfo , isuerLogin , setIsUserLogin
    }

  return (
    
    <AppContext.Provider value={value}> 
        {props.children}
    </AppContext.Provider>
    
  )
}

export default AppContext