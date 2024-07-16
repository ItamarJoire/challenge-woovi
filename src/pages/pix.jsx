import { 
  Footer, 
  Header, 
  PaymentInformation, 
  Grid, 
  Title, 
  QrCodeReader, 
  CountdownTimer, 
  CountdownTimerCrediCard 
} from "../components";

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
          <Title>
            João, use o QR Code do Pix para pagar
          </Title>
          <p className="text-center mt-[-24px] text-zinc-600 mb-8">
            Abra o app em que vai fazer o pagamento, escaneie a imagem ou copie o código do QR Code
          </p>

          <QrCodeReader value={values.total}/>

          <CountdownTimer initialMinutes={0.5}/>
        </div>
      ) : (
        <div>
          <Title title={`João, use o QR Code do Pix para pagar a ENTRADA`}/>
          <p className="text-center mt-[-24px] text-zinc-600 mb-8">Abra o app em que vai fazer o pagamento, escaneie a imagem ou copie o código do QR Code</p>

          <QrCodeReader />
           
          <CountdownTimerCrediCard initialMinutes={.5}/>

          <PaymentInformation icon={IconLineCheck} />
        </div> 
      )

      }
    <Footer />
  </Grid>
  

  )
}