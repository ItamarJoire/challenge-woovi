
import Tag from '/tag.png'
import { useState } from 'react'

export function ContainerPrice({ amount, total, value, valueTag, nameTag, option, showTag = 'hidden', borderRadius }){
  const [op, setOp] = useState('')

  function handle(event){
    console.log(event.target.value)
    setOp(event.target.value)
  }

  return(
    <div className={`border-l-2 border-r-2 border-b-2 ${borderRadius} border-zinc-200 p-5 relative `}>
      <div className='space-y-2'>
        <div className='flex items-baseline justify-between'>
          <div>
            <p className='text-2xl font-semibold text-zinc-700'><span className='font-extrabold text-zinc-800'>{amount}</span> R$ {value}</p>
            <p className='text-zinc-400 font-medium'>Total: {total}</p>
          </div>

          <label className='custom-radio'>
            <input type="radio" name='option' value={option} onChange={handle}/>
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