import React, { PureComponent } from 'react';

class App extends React.Component {
  render() {
    console.warn('check rendering');
    return (
      <div>
        <h1>User Component {this.props.count} </h1>
      </div>
    );
  }
}
export default App;
