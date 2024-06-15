import { useState } from "react"; //to use hooks



function App() {

  let [counter, setCounter] = useState (15); //using useState hooks
  //it returns an array. the first element is the variable we are working on and 
  // other is the function or method which will update the variable

  //name of the both the parameters can be anything

  //let counter =0;

  const addValue= () => {
    if(counter <20){
    // counter= counter+1;
    //we dont need to update the variable manually, react will handle it by itself.
    // setCounter(counter+1);
    setCounter((prevCounter) => prevCounter + 1 ); //increments by 1 
    setCounter ( prevCounter => prevCounter + 1 ); //increments by 1
    setCounter(c=>c+2); //increments by 2
    console.log("clicked", counter);
    }
  }

  const removeValue = () => {
    if(counter === 0)
        return
    setCounter(counter - 1);
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
