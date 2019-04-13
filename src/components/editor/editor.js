

import React, { useState, useEffect } from 'react'
import './editor.css'
import CKEditor from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import {updateFiles as upload} from '../gapi/gapi'
import { useStore } from '../../global'

export default function EditorDraft(){
    const activeId  = useStore(state => state.activeId)
    const activeContent  = useStore(state => state.activeContent)
    const [editorState, setEditorState] = useState('')

    useEffect(function(){
        console.log(activeContent)
    })
    function onEditorChange ( event, editor ){
        const data = editor.getData()
        if(data %150 === 0 && data.length !== 0){
            console.log( { event, editor, data } )
            
        }
    }

    function saveEditorData(){
        console.log("data is", editorState.getData(), activeId)
        upload(activeId, editorState.getData())
    }

    function init(editor){
        setEditorState(editor)
    }

    return(
        <section className="content">
            <div className="tools"><span onClick={saveEditorData}>Save</span></div>
            <CKEditor
                    editor={ ClassicEditor }
                    data={ activeContent }
                    onInit={ init }
                    onChange={ onEditorChange }
                />
        </section>
    )
}