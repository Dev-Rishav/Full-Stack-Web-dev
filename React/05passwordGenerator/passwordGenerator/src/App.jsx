import { useState, useCallback, useEffect,useRef } from 'react'
// import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook
  const passwordRef=useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) str += "1234567890";
    if (charAllowed) str += "~!@#$%^&*()_+{}";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);   //generate a random index from the string 

      pass += str.charAt(char);    //append the random character from the index to the final string 
    }
    setPassword(pass);  //update the password using useState() hook

  }, [length, numAllowed, charAllowed, setPassword]);

  useEffect(() => {
      passwordGenerator()
  },[length, numAllowed, charAllowed, passwordGenerator])

  const copyPasswordToClipboard=useCallback(() => {
    passwordRef.current?.select();//after copying, this hook highlight the part that is copied || ? is used to determine i the value is null then pass or otherwise execute
    passwordRef.current?.setSelectionRange(0,30); //dont let user copy more than  30 characters from the input box 
    window.navigator.clipboard.writeText(password);//copy the text from the input box to clipboard

  },[password])


  return (
    <>
      < div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8  text-orange-300 bg-gray-700' >
        <h1 className='text-white text-center my-3'> Password Generator</h1>
        <div className='flex-shadow rounded-lg overflow-hidden mb-4'>
          <input type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly 
            ref={passwordRef}/>   //this connects the hooks to the html elements
          <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              id="numberInput"
              onChange={() => {
                setNumAllowed(prev => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div
            className='flex items-center gap-x-1'>
            <input type='checkBox'
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => {
                setCharAllowed(prev => !prev);
              }}
            />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
