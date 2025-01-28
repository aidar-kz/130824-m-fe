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