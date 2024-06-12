import { useState } from "react";


function App() {
  let counter =0;

  const addValue= () => {
    console.log("clicked", counter);
    counter= counter+1;
  }
  return (
    <>
      <h1>Chai aur code</h1>
      <h2>counter value: {counter}</h2>
      <br/>
      <button onClick={addValue}>Add value {counter}</button>
      <button>remove Value {counter}</button>
      <p>footer: {counter}</p>
      //the problem here is counter variable gets updated inside the 
      //function only but are used globally. To overcome this issue hooks 
      //are introduced to get the job done
    </>
  )
}

export default App
