import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseEffectDataFetch from './feb23/UseEffectDataFetch'
import UseLayoutEffectMeasure from './feb24/UseLayoutEffectMeasure'
import UseInsertionEffectStyles from './feb24/UseInsertionEffectStyles'
import UseMemoPerformance from './feb25/UseMemoPerformance'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UseEffectDataFetch />
      <hr />
      <UseLayoutEffectMeasure/>
      <hr />
      <UseInsertionEffectStyles/>
      <hr />
      <UseMemoPerformance/>
      

    </>
  )
}

export default App
