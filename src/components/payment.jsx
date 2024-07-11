import IconArrowUp from '/arrow-up.svg'

export function Payment({ icon, value }){
  return(
    <div>
        <div className="flex justify-between mt-5">
          <div className="flex gap-2">
            <img src={icon}/>

            <div className="space-y-3">
              <p className="text-lg font-medium text-zinc-700">1ª entrada no Pix</p>
              <p className="text-lg font-medium text-zinc-700">2ª no cartão</p>
            </div>
          </div>

          <div className="space-y-5">
            <p className="font-extrabold text-zinc-700">R$ 15.300,00</p>
            <p className="font-extrabold text-zinc-700">R$ 15.300,00</p>
          </div>

        </div>  
        

        <div className="space-y-5">
          <div className="border-b-2 text-zinc-950 mt-5"></div>
        
          <div className="flex justify-between items-center">
            <p className="text-sm text-zinc-700">CET: 0,5%</p>
            <p className="text-lg text-zinc-700">Total: R$ {value}</p>
          </div>
          
          <div className="border-b-2 text-zinc-950"></div>

          <div className="flex justify-between items-center">
            <p className="text-sm text-zinc-700 font-extrabold">Como funciona?</p>
            <img src={IconArrowUp} alt="" />
          </div>

          <div className="border-b-2 text-zinc-950"></div>

          <div className="text-center mt-6">
          <p className="text-zinc-400 text-sm">Identificador:</p>
          <p className="text-zinc-600 font-extrabold text-sm">2c1b951f356c4680b13ba1c9fc889c47</p>
        </div>

        
        </div>
      </div>
  )
}