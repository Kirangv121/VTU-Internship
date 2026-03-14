import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ControlledForm from './components/ControlledForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="container">
      <h1>Controlled Components Demo</h1>
      <ControlledForm/>
    </div>
       
    </>
  )
}

export default App
