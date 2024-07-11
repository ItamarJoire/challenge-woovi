import Tag from '/tag.png'
import CircleEmpty from '/circle-empty.svg'
import CircleCheck from '/circle-check.svg'

import { ContainerPrice, Footer, Header } from '../components'
import { GridContainer, TitleContainer } from '../containers'

export function Home(){
  return(
    <GridContainer>
      <Header />

      <TitleContainer title='João, como você quer pagar?' />

      <div className='border-2 border-zinc-200 rounded-[10px] p-5 relative'>
        <div className='bg-zinc-200 inline-block px-5 py-1 rounded-full absolute top-[-18px]'>
          <span className='font-extrabold text-lg text-zinc-700'>Pix</span>
        </div>

        <div className='space-y-2'>
          <div className='flex items-baseline justify-between'>
            <div>
              <p className='text-2xl font-semibold text-zinc-700'><span className='font-extrabold text-zinc-800'>1x</span> R$ 30.500,00</p>
              <p className='text-xl text-primary font-medium'>Ganhe <span className='font-extrabold'>3%</span> de Cashback</p>
            </div>

            <a href="#"><img src={CircleEmpty} className='text-zinc-200'/></a>
          </div>

          <div className='relative'>
            <p className='absolute text-white font-semibold px-2 py-1.5'>🤑 <span className='font-extrabold'>R$ 300,00</span> de volta no seu Pix na hora</p>
            <img src={Tag} alt="" />
          </div>
        </div>
      </div>


      <div className='border-2 border-primary bg-primary/5 rounded-t-[10px] p-5 relative mt-9'>
        <div className='bg-zinc-200 inline-block px-5 py-1 rounded-full absolute top-[-18px]'>
          <span className='font-extrabold text-lg text-zinc-700'>Pix Parcelado</span>
        </div>

        <div className='space-y-2'>
          <div className='flex items-baseline justify-between'>
            <div>
              <p className='text-2xl font-semibold text-zinc-700'><span className='font-extrabold text-zinc-800'>2x</span> R$ 15.300,00</p>
              <p className=' text-zinc-400 font-medium'>Total: RS 30.600,00</p>
            </div>

            <a href="#"><img src={CircleCheck} className='rounded-full'/></a>
          </div>   
        </div>
      </div>

      <ContainerPrice 
        amount='3x'
        value='10.196,66'
        total='30.620,00'
        image={CircleEmpty}
      />

      <ContainerPrice 
        amount='4x'
        value='7.725,00'
        total='30.900,00'
        image={CircleEmpty}
        showTag
        valueTag='-3% de juros: '
        nameTag='Melhor opção de parcelamento'
      />

      <ContainerPrice 
        amount='5x'
        value='6.300,00'
        total='31.500,00'
        image={CircleEmpty}
      />

      <ContainerPrice 
        amount='6x'
        value='5.283,33'
        total='31.699,98'
        image={CircleEmpty}
      />

      <ContainerPrice 
        amount='7x'
        value='4.452,8 5'
        total='31.800,00'
        image={CircleEmpty}
        borderRadius='rounded-b-xl'
      />

      <Footer />
    </GridContainer>
  )
}