import React, { Component } from 'react';
import NavWrapper from './navigation'

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>DevCamp React Starter</h1>
        <h1>Hello World</h1>
        <h2>React Redux Router</h2>
        <NavWrapper />
      </div>
    );
  }
}
