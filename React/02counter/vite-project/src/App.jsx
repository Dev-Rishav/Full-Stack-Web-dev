import { useState } from "react"; //to use hooks



function App() {

  let [counter, setCounter] = useState (0); //using useState hooks
  //it returns an array. the first element is the variable we are working on and 
  // other is the function or method which will update the variable

  //name of the both the parameters can be anything

  //let counter =0;

  const addValue= () => {
    
    // counter= counter+1;
    //we dont need to update the variable manually, react will handle it by itself.
    setCounter(counter+1);
    console.log("clicked", counter);
  }

  const removeValue = () => {
    setCounter(counter-1);
    console.log("clicked", counter);

  }


  return (
    <>
      <h1>Chai aur code</h1>
      <h2>counter value: {counter}</h2>
      <br/>
      <button onClick={addValue}>Add value {counter}</button>
      <button  onClick={removeValue}>remove Value {counter}</button>
      <p>footer: {counter}</p>
      //the problem here is counter variable gets updated inside the 
      //function only but are used globally. To overcome this issue hooks 
      //are introduced to get the job done
    </>
  )
}

export default App
