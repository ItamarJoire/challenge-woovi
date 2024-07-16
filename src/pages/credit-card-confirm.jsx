import { CreditCardForm, Grid, Header, PaymentInformationCreditCard } from "../components";

import { useContext, useEffect } from "react";
import { PaymentContext } from "../contexts/payment";

import IconLineChecksGreen from '/line-checks-green.svg'

import { useNavigate } from "react-router-dom";

export function CreditCardConfirm(){
  const { values, setValues } = useContext(PaymentContext)
  
  const navigate = useNavigate()

  useEffect(() => {
    const storage = localStorage.getItem('@payment')

    if(storage){
      setValues(JSON.parse(storage))
    }  
  }, [])

  function navigateIndex(){
    navigate('/')
  }

  return(
    
      <Grid>
      <Header />
       

        <PaymentInformationCreditCard icon={IconLineChecksGreen} textColor='text-primary' numberColor='text-primary' text='Pagamento confirmado'/>

        <button onClick={navigateIndex} className="bg-secondary flex gap-2 px-5 py-2 rounded-lg mt-10 mx-auto w-full hover:opacity-60 transition-all duration-200">
          <p className="text-white text-lg font-semibold mx-auto">Fazer nova simulação</p>
        </button>

      </Grid>
   
  )
}