import Tag from '/tag.png'

export function ContainerPrice({ image, amount, total, value, valueTag, nameTag, showTag = 'hidden', borderRadius }){
  return(
    <div className={`border-l-2 border-r-2 border-b-2 ${borderRadius} border-zinc-200 p-5 relative `}>
      <div className='space-y-2'>
        <div className='flex items-baseline justify-between'>
          <div>
            <p className='text-2xl font-semibold text-zinc-700'><span className='font-extrabold text-zinc-800'>{amount}</span> R$ {value}</p>
            <p className='text-zinc-400 font-medium'>Total: {total}</p>
          </div>

          <a href="#"><img src={image} className='rounded-full'/></a>

        </div>   
        
        <div className={`relative' ${showTag}`}>
          <p className='absolute text-white font-semibold px-2 py-1.5'><span className='font-extrabold'>{valueTag}</span> {nameTag}</p>
          <img src={Tag} alt="" />
        </div>
      </div>
    </div>
  )
}