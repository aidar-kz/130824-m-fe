import './App.css'
import { useState } from 'react'
import WhyState from './component/1-whyState.jsx'
import UseState from './component/2-useState.jsx'
import MultiState from './component/4-multiState.jsx'
import PrivateState from './component/5-privateState.jsx'
import SharedState from './component/6-sharedState.jsx'
import { galleryList } from './api/gallery.js'

function App() {
  const [index, setIndex] = useState(0)
  const [showDescStates, setShowDescStates] = useState(Array(galleryList.length).fill(false))

  const handlePrevClick = () => setIndex(index - 1)
  const handleNextClick = () => setIndex(index + 1)

  const handleDescClick = () => {
    const updatedShowDescStates = [...showDescStates];
    updatedShowDescStates[index] = !updatedShowDescStates[index];
    setShowDescStates(updatedShowDescStates);
  }

  return (
    <>
      {/* <WhyState gallery={galleryList} /> */}
      {/* <UseState gallery={galleryList} /> */}
      {/* <MultiState gallery={galleryList} /> */}
      {/* <PrivateState gallery={galleryList} /> */}
      <SharedState
        gallery={galleryList}
        index={index}
        showDesc={showDescStates[index]}
        handlePrevClick={handlePrevClick}
        handleNextClick={handleNextClick}
        handleDescClick={handleDescClick}
      />
      <SharedState
        gallery={galleryList}
        index={index}
        showDesc={showDescStates[index]}
        handlePrevClick={handlePrevClick}
        handleNextClick={handleNextClick}
        handleDescClick={handleDescClick}
      />
    </>
  )
}

export default App
