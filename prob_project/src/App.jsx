import './App.css'
import TodoList from './components/TodoList/TodoList'

import { TODO } from "./data"



function App() {

  return (
    <>
    <TodoList todo = {TODO}/>
    </>
  )
}

export default App


import { useState } from 'react'
import './App.css'
import {TODO} from "./data"
import TodoList from './components/Todo/TodoList'

function App() {
  const [thema, setThema] = useState('light')
  const toggleThema = () => {
    setThema(thema==='light' ? 'dark' : 'light')
  }
  return (
    <div className={`${thema}`}>
      <TodoList todo = {TODO} />
      <button onClick={toggleThema}>Поменять тему</button>
      </div>
  )
}
export default App