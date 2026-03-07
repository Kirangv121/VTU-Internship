import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DynamicContent from './components/DynamicContent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="container">
      <h1>Dynamic Content Mini Project</h1>
      <DynamicContent />
    </div>
       
    </>
  )
}

export default App
