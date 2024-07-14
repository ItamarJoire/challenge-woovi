import { Price, Footer, Header } from '../components'
import { GridContainer, TitleContainer } from '../containers'

import { useContext, useState } from 'react'
import { PaymentContext } from '../contexts/usePayment'

import { Link } from 'react-router-dom'

export function Home(){
  const { activeButton } = useContext(PaymentContext)

  const [ simulatedMoney, setSimulatedMoney ] = useState('')

  const [ moneyInStringFormat, setMoneyInStringFormat ] = useState('')
  const [ moneyInStringFormat2, setMoneyInStringFormat2 ] = useState('')
  const [ moneyInNumberFormat, setMoneyInNumberFormat ] = useState(0)

  const [showInstallments, setShowInstallments] = useState(false)

  function formatInputValue(value){

    // Remove tudo que não for dígito ou vírgula
    let cleanedValue = value.replace(/[^0-9,]/g, '');

    // Adiciona ponto como separador de milhar
    cleanedValue = cleanedValue.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return cleanedValue;
  }

  function handleChangeSimulatedMoney(e){

    const formattedValue = formatInputValue(e.target.value);

    // console.log('onChange: ', formattedValue)
    setSimulatedMoney(formattedValue);

    if(e.target.value != simulatedMoney){
      setShowInstallments(false)
    }
  }

  function convertToNumber(value) {
    let number = value.replace(/\./g, '').replace(',', '.');
    return Number(number);
  }

  function handleSubmit(e){
    e.preventDefault()
    
    const numberFormat = convertToNumber(simulatedMoney);
    
    console.log('numberFormat: ', numberFormat)
    
    setMoneyInNumberFormat(numberFormat);
   
    formatCurrencyForString(numberFormat)

    setShowInstallments(true)
  }

  function formatCurrencyForString(value){
    const stringFormat = value.toLocaleString('pt-BR', {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    console.log('stringFormat:', stringFormat)
   
    setMoneyInStringFormat(stringFormat)

    setMoneyInStringFormat2(stringFormat)

  }

  function formatCurrencyForStringAttributes(value){
    const stringFormat = value.toLocaleString('pt-BR', {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    return stringFormat
  }

  let valueOfInstallments = [];
  let valueOfInstallmentsForString = [];

  function calculateInstallments(){
    let currentValueWithoutInterest = moneyInNumberFormat 
    let currentValue = currentValueWithoutInterest += currentValueWithoutInterest * (7 / 100);
    
    let portionInit = 2
    
    let divisionOfPlots = (currentValue / portionInit).toFixed(2)
    divisionOfPlots = parseFloat(divisionOfPlots)


    for (let i = 1; i < 7; i++) {
      valueOfInstallments.push({
        option: i + 1,
        portion: portionInit,
        installmentValue: parseFloat(currentValue.toFixed(2)),
        divisionOfPlots: divisionOfPlots
      });

      portionInit += 1
      
      if(portionInit === 4){
        
      }

      currentValue += currentValue * (7 / 100);

      let value = (currentValue / portionInit).toFixed(2)
      divisionOfPlots = parseFloat(value)

     
    }

    valueOfInstallments.map(value => console.log('Vetor 1: ', value.divisionOfPlots))
    
  }

  calculateInstallments()

  return(
    <GridContainer>
      <Header />

      <TitleContainer title='João, como você quer pagar?' />
      
      <form onSubmit={handleSubmit} className='mb-12'>
        <input 
          type="text" 
          value={simulatedMoney} 
          onChange={handleChangeSimulatedMoney} 
          placeholder='Digite o valor'
          className='rounded-lg text-zinc-700 font-semibold border-2 bg-zinc-100 border-zinc-200 px-5 py-2 focus:border-primary transition-colors duration-300 outline-none '
        />

        <button 
          type='input' 
          className='bg-primary text-white font-bold rounded-lg px-5 py-2.5 ml-6 hover:bg-primary/60 transition-all duration-200'
        >
          Fazer simulação
        </button>
      </form>

  
      {showInstallments && (
        <>
          <div>
            <Price 
              showLabel='visible'
              nameLabel='Pix'
              numberOfInstallments={1}
              option={1}
              installmentValue={moneyInStringFormat}
              installmentValueNumber={moneyInNumberFormat}
              cashback={true}
              discountedValue={3}
              percentageCashback={3}
              borderRadius='border-t-2 rounded-xl'
            />
          </div>

          <div className='mt-8'>
            {valueOfInstallments.map(value => {
              if(value.option === 2){
                return(
                  <Price 
                    option={value.option}
                    key={value.portion}
                    numberOfInstallments={value.portion}
                    installmentValue={formatCurrencyForStringAttributes(value.divisionOfPlots)}
                    total={formatCurrencyForStringAttributes(value.installmentValue)}
                    showLabel='visible'
                    nameLabel='Pix Parcelado'
                    borderRadius='border-t-2 rounded-t-xl'
                  />
                )
              }

              else if(value.option > 2 && value.option <= 3){
                return(
                  <Price 
                    option={value.option}
                    key={value.portion}
                    numberOfInstallments={value.portion}
                    installmentValue={formatCurrencyForStringAttributes(value.divisionOfPlots)}
                    total={formatCurrencyForStringAttributes(value.installmentValue)}
                    showLabel='hidden'
                  />
                )
              }

              return(
                <Price 
                  option={value.option}
                  key={value.portion}
                  numberOfInstallments={value.portion}
                  installmentValue={formatCurrencyForStringAttributes(value.divisionOfPlots)}
                  total={formatCurrencyForStringAttributes(value.installmentValue)}
                  discountedValue={3}
                />
              )

              
              })
            }
            
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
        </>
      )}

      <Footer />
    </GridContainer>
  )
}