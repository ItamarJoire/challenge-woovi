import { Price, Footer, Header } from '../components'
import { GridContainer, TitleContainer } from '../containers'

import { useContext, useState } from 'react'
import { PaymentContext } from '../contexts/usePayment'

import { Link } from 'react-router-dom'

export function Home(){
  const { activeButton } = useContext(PaymentContext)

  const [ moneyInitial, setMoneyInitial ] = useState('')
  const [ realValue, setRealValue ] = useState(null)
  const [ convertReal, setConvertReal ] = useState(null)

  function formatInputValue(value){
    // Remove tudo que não for dígito ou vírgula
    let cleanedValue = value.replace(/[^0-9,]/g, '');
    // Adiciona ponto como separador de milhar
    cleanedValue = cleanedValue.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return cleanedValue;
  }

  function handleInputChange(e){
    const formattedValue = formatInputValue(e.target.value);
    setMoneyInitial(formattedValue);
  }

  function convertToNumber(value) {
    let number = value.replace(/\./g, '').replace(',', '.');
    return Number(number);
  }

  function handleButtonClick(){
    const numericValue = convertToNumber(moneyInitial);
    setRealValue(numericValue);
    formatCurrency(numericValue)
  }

  function formatCurrency(value){
    const newValue = value.toLocaleString('pt-BR', {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    setConvertReal(newValue)
  };

  return(
    <GridContainer>
      <Header />

      <TitleContainer title='João, como você quer pagar?' />
      
      <div className='mb-12'>
        <input 
          type="text" 
          value={moneyInitial} 
          onChange={handleInputChange} 
          placeholder='Digite o valor'
          className='rounded-lg text-zinc-700 font-semibold border-2 bg-zinc-100 border-zinc-200 px-5 py-2 focus:border-primary transition-colors duration-300 outline-none'
        />

        <button 
          type='button' 
          onClick={handleButtonClick} 
          className='bg-primary text-white font-bold rounded-lg px-5 py-2.5 ml-6'
        >
          Fazer simulação
        </button>
        {realValue !== null && <p>Valor Real: {realValue}</p>}
      </div>

      <div>
        <Price 
          showLabel='visible'
          nameLabel='Pix'
          amount={1}
          option={1}
          value={convertReal}
          total='30.500,00'
          cashback={true}
          showTag='visible'
          percentageCashback={3}
          nameTag='🤑 R$ 300,00 de volta no seu Pix na hora'
          borderRadius='border-t-2 rounded-xl'
        />

        <div className='mt-8'>
          <Price 
            amount={2}
            option={2}
            value='15.300,00'
            total='30.600,00'
            borderRadius='border-t-2 rounded-t-xl'
          />
          
          <Price 
            amount={3}
            option={3}
            value='10.196,66'
            total='30.620,00'
          />

          <Price 
            amount={4}
            option={4}
            value='7.725,00'
            total='30.900,00'
            showTag='visible'
            nameTag='-3% de juros: Melhor opção de parcelamento'
          />
        </div>
      </div>

      {activeButton ? (
        <Link to='/pix'>
        <button className='bg-secondary flex gap-2 px-5 py-2 rounded-lg mt-10 mx-auto w-full'>
          <p className="text-white text-lg font-semibold mx-auto">Avançar</p>
        </button>
        </Link>
      ) : (
        <button className='bg-zinc-300 cursor-not-allowed flex gap-2 px-5 py-2 rounded-lg mt-10 mx-auto w-full'>
          <p className="text-white text-lg font-semibold mx-auto">Avançar</p>
        </button>
      )}
      
      <Footer />
    </GridContainer>
  )
}