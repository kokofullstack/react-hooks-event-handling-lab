// Code Keypad Component Here
import React from 'react';

function Keypad() {
  const handleChange = (event) => {
    console.log('Entering password...');
    console.log(event.target.value);
  };
  return (
    <div>
      <input
        type="password"
        name="password"
        onChange={handleChange}
        placeholder="Enter password..."
      />
    </div>
  );
}

export default Keypad;
