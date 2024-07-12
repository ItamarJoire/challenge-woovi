import { createContext, useEffect, useState } from "react";

export const PaymentContext = createContext({})

export function PaymentProvider({children}){
  const [option, setOption] = useState()

  useEffect(() => {
    console.log(option)
  }, [option])

  return(
    <PaymentContext.Provider 
      value={{
        setOption
      }}
    >
      {children}
    </PaymentContext.Provider>
  )
}