import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
// let counter = 15
let  [counter,setCounter] = useState(15)
let addvalue = () =>{

  // counter = counter + 1;
  setCounter(counter + 1);
  console.log("check")

}
let removeValue = () =>{
  setCounter(counter - 1);
}
  return (
    <>
    <h1>hello Shailesh</h1>
    <h2>Counter value : {counter}</h2>
    <button  onClick={addvalue}> Add Value</button>
    <button   onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
