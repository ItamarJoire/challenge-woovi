import { createContext, useEffect, useState } from "react";

export const PaymentContext = createContext({})

export function PaymentProvider({children}){
  const [option, setOption] = useState()
  const [activeButton, setActiveButton] = useState(false)

  // useEffect(() => {
  //   console.log(option)
  //   console.log(activeButton)
  // }, [option])

  return(
    <PaymentContext.Provider 
      value={{
        setOption,
        option,
        setActiveButton,
        activeButton,
      }}
    >
      {children}
    </PaymentContext.Provider>
  )
}