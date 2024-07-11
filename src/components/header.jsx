import Logo from '/logo.png'

export function Header(){
  return (
    <header>
      <img src={Logo} alt="" className='mb-10 mx-auto'/>
    </header>
  )
}