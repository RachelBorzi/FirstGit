import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from './Hello'

function App() {

  const [count1, setCount1] = useState(0)

  return (<><h1>hi! hello world! good</h1>
          <h1>hi! this is a nice day!</h1>
           <Hello/>
           console.log("hi i'm mali");
  let codcod='Mali user';
</> 
  )
}

export default App
