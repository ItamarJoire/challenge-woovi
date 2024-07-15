import { Footer, Header, PaymentInformation, Grid, Title, QrCodeReader } from "../components";

import ImgQrCode from '/qr-code.png'
import IconCopy from '/copy.svg'
import IconLineCheck from '/line-check.svg'

import { useEffect } from "react";

import { useContext } from "react";
import { PaymentContext } from "../contexts/payment";

export function Pix(){
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
      
      {values.option === 1 ? (
        <div>
          <Title title={`João, use o QR Code do Pix para pagar`}/>
          <p className="text-center mt-[-24px] text-zinc-600 mb-8">Abra o app em que vai fazer o pagamento, escaneie a imagem ou cole o código do QR Code</p>

          {/* <QrCodeReader /> */}
          <img src={ImgQrCode} className="mx-auto border-2 border-primary rounded-[10px] p-1.5"/>

          <p className="mt-3 text-center text-3xl font-extrabold">R$ {values.total}</p>
          

          <button className="bg-secondary flex gap-2 px-5 py-2 rounded-lg mt-5 mx-auto">
            <p className="text-white text-sm font-semibold">COPIAR CÓDIGO DO QR CODE</p>
            <img src={IconCopy} alt="" />
          </button>   
        </div>
      ): (
        <div>
          <Title title={`João, pague a entrada de R$ ${values.total} pelo Pix`}/>
          
          {/* <div className="mx-auto border-2 border-primary rounded-[10px] p-1.5">
            <QrCodeReader />
          </div> */}
          <img src={ImgQrCode} className="mx-auto border-2 border-primary rounded-[10px] p-1.5"/>

          <button className="bg-secondary flex gap-2 px-5 py-2 rounded-lg mt-5 mx-auto">
            <p className="text-white text-sm font-semibold">COPIAR CÓDIGO DO QR CODE</p>
            <img src={IconCopy} alt="" />
          </button>   

          <div className="text-center mt-6">
            <p className="text-zinc-400">Prazo de pagamento:</p>
            <p className="text-zinc-600 font-extrabold">15/12/2021 - 08:17</p>
          </div>

          <PaymentInformation icon={IconLineCheck} value='30.600,00'/>
        </div> 
      )

      }
      

      
    <Footer />
  </Grid>
  

  )
}