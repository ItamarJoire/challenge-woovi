import Logo from '/logo.png'

export function Header(){
  return (
    <header>
      <a href="/"><img src={Logo} alt="" className='mb-10 mx-auto'/></a>
    </header>
  )
}