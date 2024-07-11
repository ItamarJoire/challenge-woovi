import { Footer, Header, Payment } from "../components";
import { GridContainer, TitleContainer } from "../containers";

import ImgQrCode from '/qr-code.png'
import IconCopy from '/copy.svg'
import IconLineCheck from '/line-check.svg'

export function Pix(){
  return(
    <GridContainer>
      <Header />
      <TitleContainer title='João, pague a entrada de R$ 15.300,00 pelo Pix'/>

      <img src={ImgQrCode} className="mx-auto border-2 border-primary rounded-[10px] p-1.5"/>

      <button className="bg-secondary flex gap-2 px-5 py-2 rounded-lg mt-5 mx-auto">
        <p className="text-white text-lg font-semibold">Clique para copiar QR CODE</p>
        <img src={IconCopy} alt="" />
      </button>   

      <div className="text-center mt-6">
        <p className="text-zinc-400">Prazo de pagamento:</p>
        <p className="text-zinc-600 font-extrabold">15/12/2021 - 08:17</p>
      </div>

      <Payment icon={IconLineCheck} value='30.600,00'/>
    <Footer />
  </GridContainer>
  

  )
}