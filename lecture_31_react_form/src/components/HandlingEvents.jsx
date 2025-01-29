import { useState } from "react";

function HandlingEvents() {
    const [isEntered, setIsEntered] = useState(false);
    
 
    function handleclick(event) {
    console.log(event);
  }

  function handleMouseEnter(e) {
    console.log("MouseEnter event");
    console.log(e);
    setIsEntered(true)
  }

  function handleMouseLeave(e) {
    console.log("MouseLeave event");
    console.log(e);
    setIsEntered(false)
  }

  return (
    <>
      <button onClick={handleclick}>Кнопка</button>
      <div 
            style={{
                backgroundColor: isEntered ? 'lightgreen' : 'lightgrey'
            }}
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}>
            Элемент DIV
      </div>
    </>
  );
}

export default HandlingEvents;
