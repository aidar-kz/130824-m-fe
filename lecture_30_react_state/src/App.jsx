import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { galleryList } from './api/gallery.js'
import Gallery from './component/1-whyState.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Gallery theme="dark" gallery={galleryList} />
    </>
  )
}

export default App
