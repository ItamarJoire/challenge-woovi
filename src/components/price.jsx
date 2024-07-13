
import Tag from '/tag.png'
import { useContext, useEffect } from 'react'
import { PaymentContext } from '../contexts/usePayment'

export function Price({ 
  amount, 
  total, 
  value, 
  valueTag, 
  showTag = 'hidden', 
  nameTag, 
  option, 
  showLabel ='hidden',
  nameLabel,
  cashback = false,
  percentageCashback,
  borderRadius 
}){
  
  const { setActiveButton, values, setValues } = useContext(PaymentContext)

  useEffect(() => {
    console.log(values)
  }, [values])

  function updateValues(amount, value, total, option){
    setValues({
      amount: amount,
      value: convertToNumber(value),
      total: convertToNumber(total),
      option: option
    })

    setActiveButton(true)
  }

  function convertToNumber(value){
    let number = value.replace(/\./g, '').replace(',', '.');
    return Number(number);
  }

  return(
    <div className={`${values.option === option ? 'border-primary bg-primary/5 border-2' : 'border-zinc-200'} border-l-2 border-r-2 border-b-2 ${borderRadius}  p-5 relative `}>
      
      <div className={`${showLabel} bg-zinc-200 inline-block px-5 py-1 rounded-full absolute top-[-18px]`}>
          <span className='font-extrabold text-lg text-zinc-700'>{nameLabel}</span>
      </div>

      <div className='space-y-2'>
        <div className='flex items-baseline justify-between'>
          <div>
            <p className='text-2xl font-semibold text-zinc-700'><span className='font-extrabold text-zinc-800'>{amount}x</span> R$ {value}</p>
            {cashback ? (
              <p className='text-xl text-primary font-medium'>Ganhe <span className='font-extrabold'>{percentageCashback}%</span> de Cashback</p>
            ) : (
              <p className='text-zinc-400 font-medium'>Total: {total}</p>
            )}
            
          </div>

          <label className='custom-radio'>
            <input type="radio" name='option' value={option} onClick={() => updateValues(amount, value, total, option)}/>
            <span class="checkmark"></span>
          </label>

        </div>   
        
        <div className={`relative' ${showTag}`}>
          <p className='absolute text-white font-semibold px-2 py-1.5'><span className='font-extrabold'>{valueTag}</span> {nameTag}</p>
          <img src={Tag} alt="" />
        </div>
      </div>
    </div>
  )
}