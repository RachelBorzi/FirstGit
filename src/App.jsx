import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from './Hello'

function App() {
  const [count1, setCount1] = useState(0)

  return (<><h1>hi! hello world! good</h1>
  <Hello/>
  <h3>mali</h3></>
    
  )
}

export default App
