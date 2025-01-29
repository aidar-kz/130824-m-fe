// Задача: Создать компонент, в котором есть div с размерами 500X500.
// Когда мышь входит на территорию этого div и выходит из него цвет данного блока должен меняться на рандомный.

import React, { useState } from 'react';

const getRandomColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const RandomColorDiv = () => {
  const [color, setColor] = useState('#ffffff');

  const handleMouseEnter = () => {
    setColor(getRandomColor());
  };

  const handleMouseLeave = () => {
    setColor(getRandomColor());
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        width: '500px',
        height: '500px',
        backgroundColor: color,
        transition: 'background-color 0.3s',
      }}
    ></div>
  );
};

export default RandomColorDiv;