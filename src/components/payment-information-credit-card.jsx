import { useState } from 'react'

import { useContext } from 'react'
import { PaymentContext } from '../contexts/payment'

import { formatNumberForString } from '../helpers/format-number-for-string'

export function PaymentInformationCreditCard({ icon }){
  const { values } = useContext(PaymentContext)
  const [open, setOpen] = useState(false)

  const paymentCard = values.total - values.installmentValue

  return(
    <div>
      <div className="flex justify-between mt-5">
        <div className="flex gap-2">
          <img src={icon}/>

          <div className="space-y-3">
            <p className="text-lg font-medium text-primary">Entrada no pix</p>
            <p className="text-lg font-medium text-zinc-700">Restante no cartão</p>
          </div>
        </div>

        <div className="space-y-5">
          <p className="font-extrabold text-primary">R$ {formatNumberForString(values.installmentValue || 0)}</p>
          <p className="font-extrabold text-zinc-700">R$ {formatNumberForString(paymentCard || 0)}</p>
        </div>

      </div>  
        
      <div className="space-y-5">
        <div className="border-b-2 text-zinc-950 mt-5"></div>
      
        <div className="flex justify-between items-center">
          <p className="text-sm text-zinc-700">CET: 0,5%</p>
          <p className="text-lg text-zinc-700">Total: R$ {formatNumberForString(values.total || 0)}</p>
        </div>
        
        <div className="border-b-2 text-zinc-950"></div>

        <div className="">
          <h2>
            <button onClick={() => setOpen(!open)} type="button" className="flex items-center justify-between w-full font-medium"> 
              <span className={`text-left text-sm`}>Como funciona?</span>
              <svg   className={`w-2.5 h-2.5 ${open ? 'rotate-180' : 'rotate-90'} shrink-0 duration-75`} aria-hidden="true" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
              </svg>
            </button>
          </h2>

          <div className={`${open ? 'block' : 'hidden'}`}>
              <div className={`p-3`}>
                <p className={`mb-1 text-sm leading-7`}>
                  <span className='text-zinc-800'>1. O valor de entrada <span className='text-red-600 font-bold'>{formatNumberForString(values.installmentValue || 0)}</span> deverá ser pago no PIX que consta no QR Code.</span>
                </p>
                <p className={` text-sm leading-7`}>
                  <span className='text-zinc-800'>2. O restante do valor será divido no cartão de crédito em <span className='text-red-600 font-bold'>{values.numberOfInstallments - 1}x</span> de  <span className='text-red-600 font-bold'>{formatNumberForString(values.installmentValue || 0)}</span>.</span>
                </p>
              </div>
            </div>
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