import { createContext, useEffect, useState } from "react";

import { useLocation } from "react-router-dom";

export const PaymentContext = createContext({})

export function PaymentProvider({children}){
  const [option, setOption] = useState()
  const [activeButton, setActiveButton] = useState(false)
  const [values, setValues] = useState([{}])

  const location = useLocation()

  useEffect(() => {
    if(location.pathname === '/') localStorage.removeItem('@payment')

  }, [location.pathname])

  return(
    <PaymentContext.Provider 
      value={{
        option,
        setOption,
        activeButton,
        setActiveButton,
        values, 
        setValues
      }}
    >
      {children}
    </PaymentContext.Provider>
  )
}