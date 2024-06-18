import React, { useState } from 'react'
import { InputBox } from './Components'
import useCurrencyInfo from "./hooks/useCurrencyInfo"

const App = () => {

  const [amount,setAmount] = useState(0);
  const [from,setFrom]= useState("usd")
  const [to, setTo]= useState("inr");
  const [convertedAmount, setConvertedAmount]= useState(0);


  const currencyInfo=useCurrencyInfo(from); 

  const options= Objects.keys(currencyInfo);//this will return all the keys of the objects 

  const swap = () =>{   //this function swaps the values of the twp input field
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount); //1 these are optional 
    setAmount(amount)   //2
  }


  return (
    <div className=''>
      <InputBox/>
    </div>
  )
}

export default App

