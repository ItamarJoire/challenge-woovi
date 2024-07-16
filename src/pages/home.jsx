import { ParcelInformation, Footer, Header, Grid, Title } from '../components'

import { useContext, useState } from 'react'
import { PaymentContext } from '../contexts/payment'

import { Link } from 'react-router-dom'

export function Home(){
  const { values, activeButton } = useContext(PaymentContext)
  
  const [simulatedMoney, setSimulatedMoney] = useState('')
  const [moneyInNumberFormat, setMoneyInNumberFormat] = useState(0)
  const [showInstallments, setShowInstallments] = useState(false)

  let valueOfInstallments = [];

  function handleSubmit(e){
    e.preventDefault()
    
    const numberFormat = convertToNumber(simulatedMoney); 

    setMoneyInNumberFormat(numberFormat);
    setShowInstallments(true)
  }

  function convertToNumber(value) {
    let number = value.replace(/\./g, '').replace(',', '.');
    return Number(number);
  }

  function formatInputValue(value){
    // Remove tudo que não for dígito ou vírgula
    let cleanedValue = value.replace(/[^0-9,]/g, '');
    // Adiciona ponto como separador de milhar
    cleanedValue = cleanedValue.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    return cleanedValue;
  }

  function handleChangeSimulatedMoney(e){
    const formattedValue = formatInputValue(e.target.value);

    setSimulatedMoney(formattedValue);

    if(e.target.value != simulatedMoney){
      setShowInstallments(false)
    }
  }

  function storagePayment(){
    localStorage.setItem('@payment', JSON.stringify(values))
    console.log('values: ', values)
  }

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
      
      currentValue += currentValue * (7 / 100);

      let value = (currentValue / portionInit).toFixed(2)
      divisionOfPlots = parseFloat(value)
    }
  }

  calculateInstallments()

  return(
    <div className='relative'>
      <Grid>
        <Header />
        <Title>
          João, como você quer pagar?
        </Title>
        
        <form onSubmit={handleSubmit} className='mb-12 mx-auto text-center'>
          <input 
            type="text" 
            value={simulatedMoney} 
            onChange={handleChangeSimulatedMoney} 
            placeholder='Digite o valor'
            className='rounded-lg w-full sm:w-56  text-zinc-700 font-semibold border-2 bg-zinc-100 border-zinc-200 px-3 py-2 focus:border-primary transition-colors duration-300 outline-none '
          />

          <button 
            type='input' 
            className='bg-primary text-white font-bold rounded-lg w-full sm:w-40 mt-3 sm:mt-0 px-5 py-2.5 sm:ml-4 hover:bg-primary/60 transition-all duration-200'
          >
            Fazer simulação
          </button>
        </form>

        {showInstallments && (
          <>
            <div>
              <ParcelInformation 
                showLabel='visible'
                nameLabel='Pix'
                numberOfInstallments={1}
                option={1}
                installmentValue={moneyInNumberFormat}
                installmentValueNumber={moneyInNumberFormat}
                total={moneyInNumberFormat}
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
                      <ParcelInformation 
                        option={value.option}
                        key={value.portion}
                        numberOfInstallments={value.portion}
                        installmentValue={value.divisionOfPlots}
                        total={value.installmentValue}
                        showLabel='visible'
                        nameLabel='Pix Parcelado'
                        borderRadius='border-t-2 rounded-t-xl'
                      />
                    )
                  }

                  else if(value.option > 2 && value.option <= 3){
                    return(
                      <ParcelInformation 
                        option={value.option}
                        key={value.portion}
                        numberOfInstallments={value.portion}
                        installmentValue={value.divisionOfPlots}
                        total={value.installmentValue}
                        showLabel='hidden'
                      />
                    )
                  }
                
                  return(
                    <ParcelInformation 
                      option={value.option}
                      key={value.portion}
                      numberOfInstallments={value.portion}
                      installmentValue={value.divisionOfPlots}
                      total={value.installmentValue}
                      discountedValue={3}
                      borderRadius={value.option === 7 && (`rounded-b-xl`)}
                    />
                  )
                })
              }
            </div>

            {activeButton ? (
              <div className='bg-white w-full fixed bottom-0 left-0 py-6 z-10 px-3 shadow-inner'>
                <Link to='/pix' onClick={storagePayment}>
                  <button className='bg-secondary flex gap-2 px-5 py-2 rounded-lg mx-auto w-full sm:max-w-[380px] hover:opacity-60 transition-opacity duration-200'>
                    <p  className="text-white text-lg font-semibold mx-auto">Avançar</p>
                  </button>
                </Link>
              </div>
            ) : (
              <div className='bg-white w-full fixed bottom-0 left-0 py-6 z-10 px-3 shadow-inner'>
                <button className='bg-zinc-300 cursor-not-allowed flex gap-2 px-5 py-2 rounded-lg W mx-auto w-full sm:max-w-[380px]'>
                  <p className="text-white text-lg font-semibold mx-auto">Avançar</p>
                </button>
              </div>
            )}
          </>
        )}

        <Footer />
      </Grid>
    </div>
  )
}