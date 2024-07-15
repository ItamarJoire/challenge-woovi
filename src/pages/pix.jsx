import { Footer, Header, PaymentInformation, Grid, Title, QrCodeReader } from "../components";

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
          <p className="text-center mt-[-24px] text-zinc-600 mb-8">Abra o app em que vai fazer o pagamento, escaneie a imagem ou copie o código do QR Code</p>

          <QrCodeReader value={values.total}/>
  
        </div>
      ): (
        <div>
          <Title title={`João, use o QR Code do Pix para pagar a ENTRADA`}/>
          <p className="text-center mt-[-24px] text-zinc-600 mb-8">Abra o app em que vai fazer o pagamento, escaneie a imagem ou copie o código do QR Code</p>

          <QrCodeReader value={values.total}/>
           
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