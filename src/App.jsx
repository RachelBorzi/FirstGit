import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from './Hello'

function App() {
  const [count, setCount] = useState(0)

  return (<><h1>hi!</h1>
  <Hello/>
  <h3>mali2</h3></>
    
  )
}

export default App
