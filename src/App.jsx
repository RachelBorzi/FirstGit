import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from './Hello'

function App() {
  const [count11, setCount11] = useState(0)

  return (<><h1>hi! hello my world!</h1>
  <Hello/>
  <h3>mali</h3></>
    
  )
}

export default App
