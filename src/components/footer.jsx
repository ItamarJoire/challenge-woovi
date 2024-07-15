import Shield from '/shield.svg'
import LogoGray from '/logo-gray.svg'

export function Footer(){
  return(
    <footer className='flex justify-center gap-2 mt-10 mb-5 mx-auto'>
      <img src={Shield} alt="" />
      <p className='text-zinc-400'>Pagamento 100% seguro via:</p>
      <img src={LogoGray} alt="" />
    </footer>
  )
}