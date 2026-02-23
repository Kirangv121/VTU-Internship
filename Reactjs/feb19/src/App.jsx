import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseEffectDemo from './components/Useeffect'
import UseEffectExa1 from './components/UseEffectExa1'
import UseEffectExa3 from './components/UseEffectExa3'
import UseEffectExa2 from './components/UseEffectExa2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <UseEffectDemo/>
    <UseEffectExa1/>
    <UseEffectExa2/>
    <UseEffectExa3/>
    </>
  )
}

export default App
