import { useContext } from 'react'
import { PaymentContext } from '../contexts/payment'

import { formatNumberForString } from '../helpers/format-number-for-string'


export function PaymentInformationCreditCard({ icon, textColor, numberColor, text }){
  const { values } = useContext(PaymentContext)

  const paymentCard = values.total - values.installmentValue
  
  return(
    <div>
      <div className="flex justify-between mt-5">
        <div className="flex gap-2">
          <img src={icon}/>

          <div className="space-y-3">
            <p className="text-lg font-medium text-primary">Entrada no pix pago</p>
            <p className={`text-lg font-medium  ${textColor}`}>{text}</p>
          </div>
        </div>

        

        <div className="space-y-5">
          <p className="font-extrabold text-primary">R$ {formatNumberForString(values.installmentValue || 0)}</p>
          <p className={`font-extrabold ${numberColor}`}>R$ {formatNumberForString(paymentCard || 0)}</p>
        </div>

      </div>  
        
      <div className="space-y-5">
        <div className="border-b-2 text-zinc-950 mt-5"></div>
      
        <div className="flex justify-between items-center">
          <p className="text-sm text-zinc-700">CET: 0,5%</p>
          <p className="text-lg text-zinc-700">Total: R$ {formatNumberForString(values.total || 0)}</p>
        </div>
        
        <div className="border-b-2 text-zinc-950"></div>

        <div className="text-center mt-6">
        <p className="text-zinc-400 text-sm">Identificador:</p>
        <p className="text-zinc-600 font-extrabold text-sm">{values.idPayment}</p>
      </div>
      </div>
      </div>
  )
}