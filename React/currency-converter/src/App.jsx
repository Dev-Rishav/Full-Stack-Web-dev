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
  


  return (
    <div className=''>
      <InputBox/>
    </div>
  )
}

export default App

