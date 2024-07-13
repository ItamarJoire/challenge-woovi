
import Tag from '/tag.png'
import { useContext } from 'react'
import { PaymentContext } from '../contexts/usePayment'

export function Price({ amount, total, value, valueTag, nameTag, op, showTag = 'hidden', borderRadius }){
  const { option, setOption, setActiveButton } = useContext(PaymentContext)

  return(
    <div className={`${option === op ? 'border-primary bg-primary/5 border-2' : 'border-zinc-200'} border-l-2 border-r-2 border-b-2 ${borderRadius}  p-5 relative `}>
      <div className='space-y-2'>
        <div className='flex items-baseline justify-between'>
          <div>
            <p className='text-2xl font-semibold text-zinc-700'><span className='font-extrabold text-zinc-800'>{amount}</span> R$ {value}</p>
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