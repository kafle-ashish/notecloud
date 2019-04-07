


import React, { useEffect, useState } from 'react';
import './App.css';
import NavContainer from './components/containers/navc'
import { initClient as loader } from './components/gapi/gapi'
import Menu from './components/menu/menu'
import Editor from './components/editor/editor'

import {
  // uploadFiles,
  // createFolder,
  // getDriveInfo,
  listFolder,

} from './components/gapi/gapi'

function App() {
  let [ rootId, setRootId ] = useState(null)
  let [files, setFiles ] = useState([])

  useEffect(function(){
    loader(function(rootid){
      setRootId(rootid)
      if(rootId !== null){
        listFolder(rootId, function(data){
          if(files.length !== JSON.parse(data.body).files.length){
            setFiles(JSON.parse(data.body).files)
            console.log(files ,JSON.parse(data.body).files)
          }
          // else console.log("File is same")
        })
      }
    })
  })

    return (
      <div className="container">
        <NavContainer/>
        <div className="body">
          <Menu rootId={rootId} files={files}/>
          <Editor/>
      </div>
      </div>
    )
}

export default App;
