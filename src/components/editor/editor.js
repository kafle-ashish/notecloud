import React, { useState } from 'react'
import './editor.css'
import CKEditor from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import {updateFiles as upload} from '../gapi/gapi'
import { useStore } from '../../global'
import editorConfig from './config/config'

export default function EditorDraft(){
    const activeId  = useStore(state => state.activeId)
    const activeContent  = useStore(state => state.activeContent)
    const [editor, setEditorState] = useState('')

    const saveEditorData = () => upload(activeId, editor.getData())
    const init = editor => setEditorState(editor)
    const onEditorChange = () => editor.getData() %150 === 0 && editor.getData().length !== 0 
                                && saveEditorData()

    return(
        <section className="content">
            <div className="tools"><span onClick={saveEditorData}>Save</span></div>
            <CKEditor
                    editor={ ClassicEditor }
                    data={ activeContent }
                    onInit={ init }
                    onChange={ onEditorChange }
                    config={editorConfig}
                />
        </section>
    )
}