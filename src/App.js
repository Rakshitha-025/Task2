import React from 'react';
import ColorPicker from './components/ColorPicker'; // Correct import path
import './App.css'; 

const App = () => {
  const colors = ['#FF0000', '#33FF57', '#5733FF','#FFFF00','#CF9FFF','#FF5733' , '#33CCFF','#33FFCC','#800080','#008000','#FFB6C1','#5C4033'];
  
  return (
    <div className="App">
      <ColorPicker colors={colors} />
    </div>
  );
};

export default App;
