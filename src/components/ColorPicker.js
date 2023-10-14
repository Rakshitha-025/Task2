import React, { useState } from 'react';
import './ColorPicker.css';

function ColorPicker({ colors }) {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorClick = (color) => {
    setSelectedColor(color);
    document.body.style.backgroundColor = color; 
  };

  const resetColor = () => {
    setSelectedColor(null);
    document.body.style.backgroundColor = ''; 
  };

  return (
    <div className="color-picker">
      <div className="centered-content">
        <div className="color-list">
          {colors.map((color, index) => (
            <div
              key={index}
              className="color-item"
              style={{ backgroundColor: color }}
              onClick={() => handleColorClick(color)}
            />
          ))}
        </div>
        {selectedColor ? (
          <div className="color-selected">
            <button onClick={resetColor}><center>Pick a color</center></button>
          </div>
        ) : (
          <button onClick={() => handleColorClick(colors[0])}><center>Pick a color</center></button>
        )}
      </div>
    </div>
  );
}

export default ColorPicker;