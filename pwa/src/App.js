import React, { Component } from 'react';
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div className="container">
          Hello world
          <style jsx>
            {`    
              .container {
                padding-left: 24px;
                padding-right: 24px;
              }
            `}
          </style>
      </div>
    );
  }
}

export default App;
