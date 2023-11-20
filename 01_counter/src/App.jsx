import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 let[counter,setCounter]= useState(15);
  //let counter=15;
  const addCount=()=>{
    console.log("addCount",counter);
    if(counter<20)
    {counter++;}
    console.log(counter);
    setCounter(counter)
  }
  const removeCount=()=>{
    if(counter>0)
    counter--;
    console.log(counter);
    setCounter(counter);
  }
  return (
    <>
     <h1>react and chai</h1>
     <h2>react counter:{counter}</h2>
     <button onClick={addCount}>add count</button>
     <br></br>
     <button onClick={removeCount}>decrease count</button>
    </>
  )
}

export default App
