import React, { useRef } from 'react';
import User from './User';

const App = () => {
  let inputRef = useRef(null);

  function refChange() {
    inputRef.current.value = '1000';
    inputRef.current.style.backgroundColor = 'red';
    inputRef.current.focus();
  }

  return (
    <div>
      <h1>Forward Ref in React</h1>
      <User ref={inputRef} />
      <br />
      <br />
      <button onClick={refChange}>Update</button>
    </div>
  );
};

export default App;
