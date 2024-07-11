import { Footer, Header, Payment } from "../components";
import { GridContainer, TitleContainer } from "../containers";

import IconArrowDown from '/arrow-down.svg'
import IconLineCheckGreen from '/line-check-green.svg'

export function CreditCard(){
  return(
    <GridContainer>
      <Header />
      <TitleContainer title='João, pague o restante em 1x no cartão'/>

      <form>
        <div className="space-y-7">
          <div className="relative ">
            <label className="text-sm text-zinc-700 bg-white absolute top-[-10px] left-[5px] px-2 ml-2">Nome completo</label>
            <input type="text" className="text-zinc-700 border-2 w-full h-16 rounded-lg text-lg p-5 font-medium" value='João Linaldo Dias Fraga Santos' />
          </div>

          <div className="relative">
            <label className="text-sm text-zinc-700 bg-white absolute top-[-10px] left-[5px] px-2 ml-2">CPF</label>
            <input type="text" className="text-zinc-700 border-2 w-full h-16 rounded-lg text-lg p-5 font-medium" value='405.503.503-15' />
          </div>

          <div className="relative">
            <label className="text-sm text-zinc-700 bg-white absolute top-[-10px] left-[5px] px-2 ml-2">Número do cartão</label>
            <input type="text" className="text-zinc-700 border-2 w-full h-16 rounded-lg text-lg p-5 font-medium" value='405.503.503-15' />
          </div>

          <div className="flex gap-5">
            <div className="relative">
              <label className="text-sm text-zinc-700 bg-white absolute top-[-10px] left-[5px] px-2 ml-2">Vencimento</label>
              <input type="text" className="text-zinc-700 border-2 w-full h-16 rounded-lg text-lg p-5 font-medium" value='10/11' />
            </div>

            <div className="relative">
              <label className="text-sm text-zinc-700 bg-white absolute top-[-10px] left-[5px] px-2 ml-2">CVV</label>
              <input type="text" className="text-zinc-700 border-2 w-full h-16 rounded-lg text-lg p-5 font-medium" value='10/11' />
            </div>
          </div>

          <div className="relative">
            <label className="text-sm text-zinc-700 bg-white absolute top-[-10px] left-[5px] px-2 ml-2">Parcelas</label>
            <input type="text" className="text-zinc-700 border-2 w-full h-16 rounded-lg text-lg p-5 font-medium" value='1x de 15.300,00' />
            <img src={IconArrowDown} className="absolute right-6 top-8"/>
          </div>

          <button className="bg-secondary flex gap-2 px-5 py-2 rounded-lg mt-5 mx-auto w-full ">
            <p className="text-white text-lg font-semibold mx-auto">Pagar</p>
          </button> 
        </div>
      </form>

      <div className="text-center mt-6">
        <p className="text-zinc-400">Prazo de pagamento:</p>
        <p className="text-zinc-600 font-extrabold">15/12/2021 - 08:17</p>
      </div>

      <Payment icon={IconLineCheckGreen} value='31.500,00'/>

      <Footer />
    </GridContainer>
  )
}