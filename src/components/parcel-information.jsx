
import Tag from '/tag.png'

import { useContext } from 'react'
import { PaymentContext } from '../contexts/payment'

import { formatNumberForString } from '../helpers/format-number-for-string';

import { v4 as uuidv4 } from 'uuid';

export function ParcelInformation({ 
  numberOfInstallments, 
  total, 
  installmentValue, 
  discountedValue, 
  installmentValueNumber,
  option, 
  showLabel = 'hidden',
  nameLabel,
  cashback = false,
  percentageCashback,
  borderRadius 
}){
  
  const { setActiveButton, values, setValues } = useContext(PaymentContext)

  const idQrCode = uuidv4()
  const idPayment = uuidv4()
  
  function updateValues(idPayment, numberOfInstallments, installmentValue, total, option, idQrCode){
    setValues({
      idPayment: idPayment,
      numberOfInstallments: numberOfInstallments,
      installmentValue: installmentValue,
      total: total,
      option: option,
      idQrCode: idQrCode
    })

    setActiveButton(true)
  }

  function interestCalculation(){
    const calculationCashback = (percentageCashback / 100) * installmentValueNumber 

    return calculationCashback
  }

  const interest = interestCalculation()

  return(
    <div className={`${values.option === option ? 'border-primary bg-primary/5 border-2' : 'border-zinc-200'} border-l-2 border-r-2 border-b-2 ${borderRadius}  p-5 relative `}>
      <div className={`${showLabel} bg-zinc-200 inline-block px-5 py-1 rounded-full absolute top-[-18px]`}>
          <span className='font-extrabold text-lg text-zinc-700'>{nameLabel}</span>
      </div>

      <div className='space-y-2'>
        <div className='flex items-baseline justify-between'>
          <div>
            <p className='text-2xl font-semibold text-zinc-700'><span className='font-extrabold text-zinc-800'>{numberOfInstallments}x</span> R$ {formatNumberForString(installmentValue)}</p>
            {cashback ? (
              <p className='text-xl text-primary font-medium'>Ganhe <span className='font-extrabold'>{percentageCashback}%</span> de Cashback</p>
            ) : (
              <p className='text-zinc-400 font-medium'>Total: {formatNumberForString(total)}</p>
            )}
          </div>

          <label className='custom-radio'>
            <input type="radio" name='option' value={option} onClick={() => updateValues(idPayment, numberOfInstallments, installmentValue, total, option, idQrCode)}/>
            <span className="checkmark"></span>
          </label>
        </div>   
        
        <div className='relative'>
          {option === 1 ? (
            <div>
              <p className='absolute text-white font-semibold px-2 py-1.5'>🤑 <span className='font-extrabold '>R$ {formatNumberForString(interest)}</span> de volta no seu Pix na hora</p>
              <img src={Tag} alt="" />
            </div>
          ) : option === 4 ? (
            <div>
              <p className='absolute text-white font-semibold px-2 py-1.5'><span className='font-extrabold'>-{discountedValue}% de juros</span>: melhor opção</p>
              <img src={Tag} alt="" />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}