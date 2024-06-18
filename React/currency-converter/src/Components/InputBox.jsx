import React from 'react'

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions=[],
  selectCurrency="usd",
  amountDisable= false,
  currencyDisable=false,
  className="",
  }) {

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex`}> 
    {/* here we are taking css from user so to use that variable in react we are using string fromat JS */}
      <div className='w-1/2'>
      <label className='text-black/40 mb-2 inline-block' >
        {label}
      </label>
      <input className=' outline-none w-full bg-transparent py-1.5' 
      type='number' 
      placeholder='Amount'
      disabled={amountDisable}
      value={amount}
      onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
      />
      </div>
      <div className='w-1/2 flex flex-wrap justify-end text-right'>
        <p className='text-black/40 mb-2 w-full'>Currency Type</p>
        <select
        className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'

        value={selectCurrency}
        onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        disabled={currencyDisable}
          >
            {/* loop through all the elements in currencyOptions */}
            {/* whenever looping through a list of elements react will create the dom structure n no of times until the loop
            stops which takes a massive hit on performance so we need to assign keys in html elements to optimize this absurdity  */}
            {currencyOptions.map( (currency) => (
              <option key={currency} value={currency} >{currency}</option>
            ))}
            {/* one thing we cant assign random numbers to keys, it is better to assign some value which is unique
            In case of DB we can assign IDs and in this case currency is a better option than index */}
            
          </select>
      </div>
    </div>
  )
}

export default InputBox