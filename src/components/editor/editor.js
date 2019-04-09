

import React, { useState, useEffect } from 'react'
import './editor.css'
import CKEditor from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

export default function EditorDraft(){

    let [editorState, setEditorState] = useState('Start taking notes now.')
    
    function onEditorChange ( event, editor ){
        const data = editor.getData()
        if(data %150 === 0){
            console.log( { event, editor, data } )
            setEditorState(data)
        }
    }

    const onBlur =  editor => {console.log( 'Blur.', editor )}
    const onFocused = editor => {console.log( 'Focus.', editor )}
    const init = editor => {console.log( 'Editor is ready to use!', editor )}

    return(
        <section className="content">
            <div className="tools"></div>
            <CKEditor
                    editor={ ClassicEditor }
                    data={ editorState }
                    onInit={ init }
                    onChange={ onEditorChange }
                    onBlur={ onBlur }
                    onFocus={ onFocused }
                />
        </section>
    )
}