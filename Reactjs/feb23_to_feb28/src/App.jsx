import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseEffectDataFetch from './feb23/UseEffectDataFetch'
import UseLayoutEffectMeasure from './feb24/UseLayoutEffectMeasure'
import UseInsertionEffectStyles from './feb24/UseInsertionEffectStyles'
import UseMemoPerformance from './feb25/UseMemoPerformance'
import HooksAllInOne from './feb26/HooksAllInOne'

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
      <hr />
      <h2>All hooks - 26 feb 2026</h2>
      <HooksAllInOne/>



    </>
  )
}

export default App
