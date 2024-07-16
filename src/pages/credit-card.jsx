import { Footer, Header, PaymentInformationCreditCard, Grid, Title } from "../components";

import IconLineCheckGreen from '/line-check-green.svg'

import { useContext, useEffect } from "react";
import { PaymentContext } from "../contexts/payment";

import { formatNumberForString } from "../helpers/format-number-for-string";

export function CreditCard(){
  const { values, setValues } = useContext(PaymentContext)

  const paymentCard = values.total - values.installmentValue
  
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

      <form>
        <div className="space-y-7">
          <div className="relative ">
            <label className="text-sm text-zinc-700 bg-white absolute top-[-10px] left-[5px] px-2 ml-2">Nome completo</label>
            <input type="text" className="text-zinc-700 border-2 w-full h-16 rounded-lg text-lg p-5 font-medium"  />
          </div>

          <div className="relative">
            <label className="text-sm text-zinc-700 bg-white absolute top-[-10px] left-[5px] px-2 ml-2">CPF</label>
            <input type="text" className="text-zinc-700 border-2 w-full h-16 rounded-lg text-lg p-5 font-medium"  />
          </div>

          <div className="relative">
            <label className="text-sm text-zinc-700 bg-white absolute top-[-10px] left-[5px] px-2 ml-2">Número do cartão</label>
            <input type="text" className="text-zinc-700 border-2 w-full h-16 rounded-lg text-lg p-5 font-medium" />
          </div>

          <div className="flex gap-5">
            <div className="relative">
              <label className="text-sm text-zinc-700 bg-white absolute top-[-10px] left-[5px] px-2 ml-2">Vencimento</label>
              <input type="text" className="text-zinc-700 border-2 w-full h-16 rounded-lg text-lg p-5 font-medium"  />
            </div>

            <div className="relative">
              <label className="text-sm text-zinc-700 bg-white absolute top-[-10px] left-[5px] px-2 ml-2">CVV</label>
              <input type="month" className="text-zinc-700 border-2 w-full h-16 rounded-lg text-lg p-5 font-medium" />
            </div>
          </div>

          {/* <div className="relative select-container">
            <label className="text-sm text-zinc-700 bg-white absolute top-[-10px] left-[5px] px-2 ml-2">Parcelas</label>
            <select type="text" className="text-zinc-700 border-2 w-full h-16 rounded-lg text-lg p-5 font-medium" >
              <option value="2x de 15.300,00">1x de 15.300,00</option>
              <option value="2x de 15.300,00">2x de 16.300,00</option>
            </select>
          </div> */}

          <button className="bg-secondary flex gap-2 px-5 py-2 rounded-lg mt-5 mx-auto w-full ">
            <p className="text-white text-lg font-semibold mx-auto">Pagar</p>
          </button> 
        </div>
      </form>

      <PaymentInformationCreditCard icon={IconLineCheckGreen} />

      <Footer />
    </Grid>

    
  )
}