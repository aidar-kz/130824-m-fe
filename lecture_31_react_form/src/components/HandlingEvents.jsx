<<<<<<< HEAD
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
=======
import { useState } from 'react';

function HandlingEvents() {
    const [isEntered, setIsEntered] = useState(false);
    const [coords, setCoords] = useState({ x: 0, y: 0 });

    const handleClick = (event) => console.log(event.target);
    const handleMouseEnter = (e) => setIsEntered(true);
    const handleMouseMove = (e) => setCoords({ x: e.clientX, y: e.clientY });
    const handleMouseLeave = (e) => setIsEntered(false);

    return (
        <>
            <button onClick={handleClick}>Кнопка</button>

            <div
                style={{
                    width: 500, height: 500,
                    backgroundColor: isEntered ? 'lightgreen' : 'lightgrey'
                }}
                onMouseEnter={handleMouseEnter}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                Элемент DIV
            </div>
            <p>Координаты: {coords.x}, {coords.y}</p>
        </>
    )
}

export default HandlingEvents
>>>>>>> d4c98bc7a1334283fa0535215ae90357f1da390a
