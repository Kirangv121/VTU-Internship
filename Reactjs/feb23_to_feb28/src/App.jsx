import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseEffectDataFetch from './feb23/UseEffectDataFetch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UseEffectDataFetch />
       
    </>
  )
}

export default App
