import { Footer, Header, PaymentInformationCreditCard, Grid, Title, CreditCardForm } from "../components";

import IconLineCheckGreen from '/line-check-green.svg'

import { useContext, useEffect } from "react";
import { PaymentContext } from "../contexts/payment";

import { formatNumberForString } from "../helpers/format-number-for-string";

export function CreditCard(){
  const { values, setValues } = useContext(PaymentContext)
  
  useEffect(() => {
    const storage = localStorage.getItem('@payment')

    if(storage){
      setValues(JSON.parse(storage))
    }  
  }, [])

  return(
    <Grid>
      <Header />
      <Title>
        João, pague o restante em <br />{values.numberOfInstallments - 1}x de R${formatNumberForString(values.installmentValue || 0)}
      </Title> 

      <p className="text-center mt-[-24px] text-zinc-600 mb-8">
        Preencha com os dados da sua conta.
      </p>

      <CreditCardForm />
    
      <PaymentInformationCreditCard icon={IconLineCheckGreen} textColor='text-zinc-700' numberColor='text-zinc-700' text='Cartão pendente'/>

      <Footer />
    </Grid>

    
  )
}