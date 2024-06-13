import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  const myObj={
    name: "Rishav",
    Age: 23
  }

  let myArr=[1,2,4,5];

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card userName="rishav" btnText="click me"/>
      <Card userName="YAYA"  btnText="visit me"/>

    </>
  )
}

export default App
