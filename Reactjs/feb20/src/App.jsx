import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GithubUserUseEffect from './components/GithubUserUseEffect'
import GithubSearchUseEffect from './components/GithubSearchUseEffect'
import JsonUsersUseEffect from './components/JsonUsersUseEffect'
import PostsUseEffect from './components/PostsUseEffect'
import RandomUserUseEffect from './components/RandomUserUseEffect'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <GithubUserUseEffect/>
       <JsonUsersUseEffect/>
       <PostsUseEffect/>
       <GithubSearchUseEffect/>
       <RandomUserUseEffect/>


    </>
  )
}

export default App
