import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from './Hello'

function App() {
  const [count1, setCount1] = useState(0);
  console.log("hi i'm mali");
  let codcod='Mali user';

  return (<><h1>hi! this is a nice day!</h1>
  <Hello/>
  <h3>mali2</h3></>
    
  )
}

export default App
