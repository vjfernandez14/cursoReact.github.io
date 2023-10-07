import React, { useState } from 'react';

const Button = ({ color, label, onClick }) => {
  // Utilizamos un estado para mantener el color de fondo del botón
  const [backgroundColor, setBackgroundColor] = useState(color);

  // Función para manejar el evento onClick
  const handleClick = () => {
    // Cambiamos el color de fondo del botón utilizando el estado
    // y luego ejecutamos la función de callback pasada por props
    const newColor = getRandomColor(); // Cambia el color aleatoriamente
    setBackgroundColor(newColor);
    onClick();
  };

  // Función para generar un color hexadecimal aleatorio
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <button
      style={{ backgroundColor: backgroundColor }}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default Button;
