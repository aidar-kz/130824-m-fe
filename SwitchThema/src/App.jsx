import { useState } from 'react'

import ThemeToggle from './components/ThemeToggle.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ThemeToggle />
    </>
  )
}

export default App
