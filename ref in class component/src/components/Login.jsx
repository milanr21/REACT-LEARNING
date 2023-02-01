// BASIC FORM VALIDATION

import React, { useState } from 'react';

const Login = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [userErr, setUserErr] = useState(false);
  const [passErr, setPassErr] = useState(false);
  function loginHandler(e) {
    if (user.length < 3 || password.length < 8) {
      alert('Type correct value ');
    } else {
      alert('Your From has been Submitted');
    }

    e.preventDefault();
  }

  function userHandler(e) {
    let item = e.target.value;
    if (item.length < 3) {
      setUserErr(true);
    } else {
      setUserErr(false);
    }
    setUser(item);
    console.warn(e.target.value);
  }

  function passowordHandler(e) {
    let item = e.target.value;
    if (item.length < 8) {
      setPassErr(true);
    } else {
      setPassErr(false);
    }
    setPassword(item);
  }

  return (
    <div style={{ textAlign: 'center', alignItems: 'center' }}>
      <h2>Login</h2>
      <form onSubmit={loginHandler}>
        <input type='text' placeholder='Enter user Id' onChange={userHandler} />
        <br />
        <br />
        {userErr ? <h3>User not valid</h3> : ''}
        <input
          type='password'
          placeholder='Enter user Password'
          onChange={passowordHandler}
        />
        <br />
        <br />
        {passErr ? <h3>Password must be greater than 8 characters</h3> : ''}
        <button type='submit'>Login</button>
      </form>
    </div>
  );
};

export default Login;
