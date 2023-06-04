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

      <select name="filter" onChange={handleChange}>
        <option value="all">Select a filter...</option>
        <option value="completed">Completed</option>
        <option value="incomplete">Incomplete</option>
      </select>
    </div>
  );
}

export default Keypad;
