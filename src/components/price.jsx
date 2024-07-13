
import Tag from '/tag.png'
import { useContext } from 'react'
import { PaymentContext } from '../contexts/usePayment'

export function Price({ 
  amount, 
  total, 
  value, 
  valueTag, 
  nameTag, 
  showTag = 'hidden', 
  op, 
  showLabel ='hidden',
  nameLabel,
  borderRadius 
}){
  
  const { option, setOption, setActiveButton } = useContext(PaymentContext)

  const optionNumber = parseInt(option)
  
  function convertToNumber(value, total){
    const numberStringValue = value.replace(/\./g, '').replace(',', '.');
    const numberStringTotal = value.replace(/\./g, '').replace(',', '.');

    return parseFloat(numberStringValue, numberStringTotal)
  }

  value = convertToNumber(value)
  total = convertToNumber(total)
  console.log(value, total) 
  
  return(
    <div className={`${optionNumber === op ? 'border-primary bg-primary/5 border-2' : 'border-zinc-200'} border-l-2 border-r-2 border-b-2 ${borderRadius}  p-5 relative `}>
      
      <div className={`${showLabel} bg-zinc-200 inline-block px-5 py-1 rounded-full absolute top-[-18px]`}>
          <span className='font-extrabold text-lg text-zinc-700'>{nameLabel}</span>
      </div>

      <div className='space-y-2'>
        <div className='flex items-baseline justify-between'>
          <div>
            <p className='text-2xl font-semibold text-zinc-700'><span className='font-extrabold text-zinc-800'>{amount}x</span> R$ {value}</p>
            <p className='text-zinc-400 font-medium'>Total: {total}</p>
          </div>

          <label className='custom-radio'>
            <input type="radio" name='option' value={op} onChange={(e) => setOption(e.target.value)} onClick={() => setActiveButton(true)}/>
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