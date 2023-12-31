import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from './Hello'

function App() {
  const [count, setCount] = useState(0);
  console.log("hi i'm mali");
  let code='Mali user';

  return (<><h1>hi!</h1>
  <Hello/></>
    
  )
}

export default App
