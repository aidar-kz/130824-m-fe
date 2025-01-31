// ; Следующее задание: переключатель темы (светлая/темная)
// ; Требования:
// ; - Кнопка для переключения темы (темная или светлая).
// ; - Используйте useState для управления текущей темой.
// ; - Применяйте разные стили к элементам в зависимости от выбранной темы.

import React, { useState } from "react";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const themeStyles = {
    backgroundColor: isDarkMode ? "#333" : "#fff",
    color: isDarkMode ? "#fff" : "#000",
    height: "100vh",
    width: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    transition: "0.3s",
  };

  return (
    <div style={themeStyles}>
      <h1>{isDarkMode ? "Темная тема" : "Светлая тема"}</h1>
      <button
        onClick={toggleTheme}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          border: "none",
          borderRadius: "5px",
          backgroundColor: isDarkMode ? "#555" : "#ddd",
          color: isDarkMode ? "#fff" : "#000",
          transition: "background-color 0.3s",
        }}
      >
        Переключить тему
      </button>
    </div>
  );
};

export default ThemeToggle;