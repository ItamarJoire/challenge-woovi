import {  Footer, Grid, Header } from "../components";

import { useContext, useEffect } from "react";
import { PaymentContext } from "../contexts/payment";

import IconCircleCheck from '/circle-check.svg'

import { useNavigate } from "react-router-dom";

import { formatNumberForString } from "../helpers/format-number-for-string";

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

  function getCurrentDateTime() {
    const now = new Date();
  
    // Formata dia e mês para ter dois dígitos
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Meses começam em 0
    const year = now.getFullYear();
  
    // Formata horas e minutos para ter dois dígitos
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
  
    return `${day}/${month}/${year} - ${hours}:${minutes}`;
  }
  

  return(
    
      <Grid>
      <Header />

      <div className="text-center">
        <div className="mb-4 flex justify-center ">
          <img src={IconCircleCheck} alt="" className="size-16 mt-[-20px]"/>
        </div>

        <p className="mb-4 text-lg text-zinc-900 font-bold text-center">Pagamento confirmado</p>
     
        <div className="space-y-4">
          <div>
            <p className="text-zinc-700 font-bold">Valor pago do pix:</p>
            <p>R$ {formatNumberForString(values.installmentValue || 0) }</p>
          </div>

          <div>
            <p className="text-zinc-700 font-bold">Valor pago no cartão de crédito:</p>
            <p>{values.numberOfInstallments - 1}x de R$ {formatNumberForString(values.installmentValue || 0) }</p>
          </div>

          <div>
            <p className="text-zinc-700 font-bold">Destinatário:</p>
            <p>Mommies Pizza</p>
          </div>

          <div>
            <p className="text-zinc-700 font-bold">Data do pagamento:</p>
            <p>{getCurrentDateTime()}</p>
          </div>

          <div>
            <p className="text-zinc-700 font-bold">Identificador:</p>
            <p>{values.idPayment}</p>
          </div>
      
          <div className="border-b-2 text-zinc-950"></div>
        </div>
      </div>

      <button onClick={navigateIndex} className="bg-primary flex gap-2 px-5 py-2 rounded-lg mt-10 mx-auto w-full hover:opacity-60 transition-all duration-200">
        <p className="text-white text-lg font-semibold mx-auto">Fazer nova simulação</p>
      </button>
      

       <Footer />
      </Grid>
   
  )
}