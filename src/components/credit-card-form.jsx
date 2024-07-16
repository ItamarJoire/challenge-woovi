import  { useState, useContext } from "react";

import { X } from '@phosphor-icons/react'

import { PaymentContext } from "../contexts/payment";

import { formatNumberForString } from "../helpers/format-number-for-string";

import IconCircleCheck from '/circle-check.svg'
import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";

export function CreditCardForm() {
  const [openModal, setOpenModal] = useState(false);
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [date, setDate] = useState("");
  const [cvc, setCvc] = useState("");

  const { values } = useContext(PaymentContext)

  const navigate = useNavigate()

  const repeatedElements = [];
  
  let count = 0;

  while (count < values.numberOfInstallments - 1) {
    repeatedElements.push(
      <div className="flex items-center gap-2" key={count}>
        <p className="text-sm text-zinc-400 text-left">
          <li><span className="font-bold text-zinc-500 inline-block">{values.numberOfInstallments - count - 1}x</span> de <span className="font-bold text-zinc-500 inline-block">{formatNumberForString(values.installmentValue || 0)}</span></li>
        </p>
        <p className="text-sm text-zinc-400">-</p>
        <div className="text-orange-300 flex gap-1 items-center text-sm"> 
          Pendente 
        </div> 
      </div>
    );
    count++;
    console.log(count)
  }
  
  function closeResume(){
    setOpenModal(false)
  }

  function confirmPayment(){
    toast.success("Pagamento realizado com sucesso!")
    setOpenModal(false)
    navigate('/credit-card-confirm')
  }

  function handleSubmit(e){
    e.preventDefault()

    setOpenModal(true)
  } 

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-7">
        <div className="relative ">
          <label className="text-sm text-zinc-700 bg-white absolute top-[-10px] left-[5px] px-2 ml-2">Nome completo</label>
          <input 
            type="text" 
            className="text-zinc-700 border-2 w-full h-16 rounded-lg text-lg p-5 font-medium"
            name="cardholder_name" 
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          
        </div>

        <div className="relative">
          <label className="text-sm text-zinc-700 bg-white absolute top-[-10px] left-[5px] px-2 ml-2">CPF</label>
          <input type="text" className="text-zinc-700 border-2 w-full h-16 rounded-lg text-lg p-5 font-medium"  />
        </div>

        <div className="relative">
          <label className="text-sm text-zinc-700 bg-white absolute top-[-10px] left-[5px] px-2 ml-2">Número do cartão</label>
          <input 
            type="text" 
            className="text-zinc-700 border-2 w-full h-16 rounded-lg text-lg p-5 font-medium" 
            name="card_number"
            value={cardNumber
              .replace(/\s/g, "")
              .replace(/(\d{4})/g, "$1 ")
              .trim()
            }
          
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />
        </div>

        <div className="flex gap-5">
          <div className="relative">
            <label className="text-sm text-zinc-700 bg-white absolute top-[-10px] left-[5px] px-2 ml-2">Vencimento</label>
            <input 
              type="month" 
              name="expiry_date"
              className="text-zinc-700 border-2 w-full h-16 rounded-lg text-lg p-5 font-medium"  
              value={date}
              required
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div className="relative">
            <label className="text-sm text-zinc-700 bg-white absolute top-[-10px] left-[5px] px-2 ml-2">CVV</label>
            <input 
              type="number" 
              name="cvc"
              className="text-zinc-700 border-2 w-full h-16 rounded-lg text-lg p-5 font-medium" 
              value={cvc}
              required
              onChange={(e) => setCvc(e.target.value)}
            />
          </div>
        </div>

        <button type="submit" className="bg-secondary flex gap-2 px-5 py-2 rounded-lg mt-5 mx-auto w-full hover:opacity-60 transition-all duration-200">
          <p className="text-white text-lg font-semibold mx-auto">Pagar</p>
        </button>

      </form>

      {openModal && (
        <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
        <div className='w-[480px] rounded-xl pt-5 px-6 shadow-shape bg-white space-y-5 mx-4'>
          <div className='space-y-5'>
          <div className='flex items-center justify-between'>
            <h2 className='text-lg font-semibold'>Resumo do seu pagamento</h2>
            <button onClick={closeResume}>
              <X className='size-5 text-zinc-400'/>
            </button>
          </div>
          
          <div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <p className="text-sm text-zinc-400 text-left">
                  Entrada de <p className="font-bold text-zinc-500 inline-block">{formatNumberForString(values.installmentValue || 0)}</p> no pix
                </p>
                <p className="text-sm text-zinc-400">-</p>
                <div className="text-primary flex gap-1 items-center text-sm"> 
                  aprovado 
                  <img src={IconCircleCheck} alt="" className="size-4"/>
                </div> 
              </div>

    
              <div className="flex items-center gap-2 pt-6">
                
                <p className="text-sm text-zinc-400 text-left">
                <span className="font-bold text-zinc-500 inline-block">{values.numberOfInstallments - 1}</span> parcela(s) de <p className="font-bold text-zinc-500 inline-block">{formatNumberForString(values.installmentValue || 0)}</p> no cartão
                </p>
          
              </div>

              {repeatedElements.reverse()}

              <p className="text-sm text-zinc-400 text-left pt-6">
                Total: <span className="font-bold text-zinc-500">{formatNumberForString(values.total || 0)}</span>
              </p>
            </div>
          </div>

          </div>
      
          <div className='w-full h-px bg-zinc-200'/>

            <div className="flex gap-4">
              <button onClick={closeResume} className="bg-transparent border-2 border-secondary flex gap-2 px-5 py-2 rounded-lg mb-5 mx-auto w-full hover:opacity-60 transition-opacity duration-200">
                <p className="text-secondary text-lg font-semibold mx-auto">Cancelar</p>
              </button>
              
              <button onClick={confirmPayment} className="bg-secondary flex gap-2 px-5 py-2 rounded-lg mb-5 mx-auto w-full hover:opacity-60 transition-opacity duration-200">
                <p className="text-white text-lg font-semibold mx-auto">Confirmar</p>
              </button>
          </div>
        </div>
      </div>
      )}
    </div>
  );
}
