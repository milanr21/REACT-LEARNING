import React, { useState } from 'react';

const Profile = () => {
  const [loggedIn, setLoggedIn] = useState(3);
  return (
    <div>
      {loggedIn == 1 ? (
        <h1>I am number one</h1>
      ) : loggedIn == 2 ? (
        <h1>I am number 2</h1>
      ) : (
        <h1>I am number three</h1>
      )}
    </div>
  );
};

export default Profile;
