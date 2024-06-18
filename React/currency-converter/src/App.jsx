import React, { useState } from 'react'
import { InputBox } from './Components'
import useCurrencyInfo from "./hooks/useCurrencyInfo"

const App = () => {

  const [amount,setAmount] = useState(0);
  const [from,setFrom]= useState("usd")
  const [to, setTo]= useState("inr");
  const [convertedAmount, setConvertedAmount]= useState(0);


  const currencyInfo=useCurrencyInfo(from); 

  const options= Object.keys(currencyInfo);//this will return all the keys of the objects 

  const swap = () =>{   //this function swaps the values of the twp input field
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount); //1 these are optional 
    setAmount(amount)   //2
  }

  //the api keys that are received are in percentage form, we need to multiply those with the given input values
  const convert = () =>{
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div 
      className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/259249/pexels-photo-259249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
      }}
    >
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5
        background-blur-sm bg-white/30'>
          <form
            onSubmit={(e)=> {
              e.preventDefault();
            }}
            >
            <div className="w-full mb-1">
              <InputBox label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency)=> setAmount(amount)}
                selectCurrency={from}
                onAmountChange={amount => setAmount(amount)}
              />
            </div>
            <div className='relative w-full h-0.5'>
              <button
                type='button'
                className='absolute left-1/2-translate-x-1/2-translate-y-1/2 border-2
                border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
                onClick={swap}
              >swap</button>

            </div>
            <div className='w-full mt-1 mb-4'>
              <InputBox
              label="To"
              amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={currency => setTo(currency)}
                selectCurrency={from}
                amountDisable/>
            </div>
            <button type='submit'
              className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default App

