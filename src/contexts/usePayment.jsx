import { createContext, useEffect, useState } from "react";

export const PaymentContext = createContext({})

export function PaymentProvider({children}){
  const [option, setOption] = useState()
  const [activeButton, setActiveButton] = useState(false)
  const [values, setValues] = useState([{}])

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