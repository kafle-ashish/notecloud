

import React, { useEffect, useState } from 'react';
import './App.css';
import NavContainer from './components/containers/navc'
import Menu from './components/menu/menu'
import Editor from './components/editor/editor'
import { listFolder, initClient as loader } from './components/gapi/gapi'

export default function App() {
  let [ rootId, setRootId ] = useState(null)
  let [files, setFiles ] = useState([])

  useEffect(function(){
    loader(function(rootid){
      setRootId(rootid)
      if(rootId !== null){
        listFolder(rootId, function(data){
          if(files.length !== JSON.parse(data.body).files.length)
            setFiles(JSON.parse(data.body).files)
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
