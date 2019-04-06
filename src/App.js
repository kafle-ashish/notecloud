


import React, { useEffect, useState } from 'react';
import './App.css';
import NavContainer from './components/containers/navc'
import { initClient as loader } from './components/gapi/gapi'
import Menu from './components/menu/menu'
import Editor from './components/editor/editor'

// import {
//   uploadFiles,
//   createFolder,
//   getDriveInfo,
//   listFiles,

// } from './components/gapi/gapi'

function App() {
  let [ rootId, setRootId ] = useState(null)
  useEffect(function(){
    loader(function(rootid){
      setRootId(rootid)
    })
  })
    return (
      <div className="container">
        <NavContainer/>
        <div className="body">
          <Menu rootId={rootId}/>
          <Editor/>
      </div>
      </div>
    )
}

export default App;
