import React from 'react';

class Student extends React.Component {
  componentWillUnmount() {
    alert('componentWillUnmount is called');
  }
  render() {
    return (
      <div>
        <h2>Component will Unmount</h2>
      </div>
    );
  }
}

export default Student;
