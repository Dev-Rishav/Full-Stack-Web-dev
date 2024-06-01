import Chai from "./Chai"


function App() {
  return (
    // <h1>Chai aur react with vite | Rishav</h1>
    

    //in jsx only one element can be returned
    // <Chai/>  //tag name always starts with uppercase

    //so to overcome this situation we can use <div> tag to enclose 
    //multiple elements
    // <div>
    //   <Chai/>
    //   <p>Paragraph is working</p>
    //   <h1>hello</h1>
    // </div>

    //instead of using <div> tag we will shift to <> tag which is
    //referred as fragments in jsx

    <>
    <Chai/>
    <p>Para</p>
    </>
  )
}

export default App
