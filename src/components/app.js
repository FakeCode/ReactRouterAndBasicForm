import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
        <div>
      <div>React simple starter</div>
      {this.props.children}
      </div>
    
    );
  }
}