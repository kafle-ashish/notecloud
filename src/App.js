


import React from 'react';
import './App.css';
import NavContainer from './components/containers/navc'

import Menu from './components/menu/menu'
import Editor from './components/editor/editor'

// import {
//   uploadFiles,
//   createFolder,
//   getDriveInfo,
//   listFiles,

// } from './components/gapi/gapi'

function App() {
    return (
      <div className="container">
        <NavContainer/>
        <div className="body">
          <Menu/>
          <Editor/>
      </div>
      </div>
    )
}

export default App;
