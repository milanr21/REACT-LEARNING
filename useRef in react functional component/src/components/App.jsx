import React, { useRef } from 'react';

const User = () => {
  let inputRef = useRef(null);

  function handleInput() {
    console.log('handle Input');
    // inputRef.current.value = '1000';
    // inputRef.current.style.backgroundColor = 'green';
    // inputRef.current.focus();
    inputRef.current.style.display = 'none';
  }
  return (
    <div>
      <h1>useRef in React</h1>
      <input type='text' ref={inputRef} />
      <button onClick={handleInput}>Handle Input</button>
    </div>
  );
};

export default User;
