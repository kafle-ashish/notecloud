

import React, { useEffect, useState } from 'react';
import './App.css';
import NavContainer from './components/containers/navc'
import Menu from './components/menu/menu'
import EditorDraft from './components/editor/editor'
import { listFolder, initClient as loader } from './components/gapi/gapi'

export default function App() {
  let [ rootId, setRootId ] = useState(null)
  let [files, setFiles ] = useState([])
  let [ activeId, setActiveId ] = useState(null)
  let [ activeContent, setActiveContent ] = useState('Edit and start taking notes now.')

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
  }, [rootId])

  const setTextEditor = (fileId, fileContent) => {
    setActiveId(fileId)
    setActiveContent(fileContent)
  }

  return (
    <div className="container">
      <NavContainer/>
      <div className="body">
        <Menu rootId={rootId} files={files} setTextEditor={setTextEditor}/>
        <EditorDraft fileId={activeId} content={activeContent}/>
      </div>
    </div>
  )
}
