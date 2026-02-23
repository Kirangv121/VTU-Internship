import { useState } from 'react'
import './App.css'
import Employees from './components/Employees'

function App() {
  const [count, setCount] = useState(0)
  const [age, setAge] = useState(20)
  const [num, setNum] = useState(9353777777)

  return (
    <>
      <h1>HR Page</h1>
      <Employees />
    </>
  )
}

export default App