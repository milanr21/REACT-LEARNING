import React, { createRef } from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.inputRef = createRef();
  }

  componentDidMount() {
    console.warn((this.inputRef.current.value = '2000'));
  }

  getVal() {
    console.warn(this.inputRef.current.value);
    this.inputRef.current.style.color = 'blue';
    this.inputRef.current.style.backgroundColor = 'red';
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Ref in React</h1>
        <input type='text' ref={this.inputRef} />
        <button onClick={() => this.getVal()}>Check Ref</button>

        <input type='text' ref={this.inputRef} />
        <button onClick={() => this.getVal()}>Check Ref</button>
      </div>
    );
  }
}

export default App;
