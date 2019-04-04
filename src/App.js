


import React, { Component } from 'react';
import './App.css';
import NavContainer from './components/containers/navc'

class App extends Component {
  render() {
    return (
      <div className="container">
          <NavContainer/>
        <div className="body">
          <aside className="menu">Menu Section</aside>
          <section className="content">Content Section</section>
      </div>
      </div>
    )
  }
}

export default App;
