

import React, { useEffect } from 'react';
import './App.css';
import NavContainer from './components/containers/navc'
import Menu from './components/menu/menu'
import EditorDraft from './components/editor/editor'
import { listFolder, initClient as loader } from './components/gapi/gapi'
import { useStore } from './global'

export default function App() {
  let rootId  = useStore(state => state.rootId)
  let files = useStore(state => state.files)
  // let activeId = useState(state => state.activeId)
  let { setRootId, setFiles } = useStore(state => state.actions)

  useEffect(function(){
    
    loader(function(rootid){
      setRootId(rootid)
      console.log(rootId, "[[[[[[[[[[[[[[[[[[[[")
      if(rootId !== null){
        listFolder(rootId, function(data){
          if(files.length !== JSON.parse(data.body).files.length)
            setFiles(JSON.parse(data.body).files)
        })
      }
    })
  }, [rootId])

  return (
    <div className="container">
      <NavContainer/>
      <div className="body">
        <Menu/>
        <EditorDraft/>
      </div>
    </div>
  )
}
