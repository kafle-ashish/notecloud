


import React, { Component } from 'react';
import './App.css';
import SignIn from './components/signin/signin'
import NavBar from './components/navbar/navbar'

class App extends Component {
  render() {
    return (
      <div className="container">
        <NavBar>
          <span className="brand__name">NoteCloud</span>
          <span className="nav__items">
            <pre id="content" style={{whiteSpace:`pre-wrap`}}></pre>
            <SignIn/>
          </span>
        </NavBar>
        <div className="body" contentEditable>
          Hello Notes in Cloud
      </div>
      </div>
    )
  }
}

export default App;
