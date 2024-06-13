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

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card name="rishav" someObj={myObj}/>
      <Card/>

    </>
  )
}

export default App
