

import React, { useState, useEffect } from 'react'
import './editor.css'
import CKEditor from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { FaRegSave as Save } from 'react-icons/fa'

export default function EditorDraft(){

    let [editorState, setEditorState] = useState('Start taking notes now.')
    let editorG
    
    function onEditorChange ( event, editor ){
        const data = editor.getData()
        if(data %150 === 0){
            console.log( { event, editor, data } )
            setEditorState(data)
        }
    }

    function saveEditorData(){
        console.log("data is", editorG.getData())
    }

    useEffect(function(){
        let data = `
        <button id="save__data" class="ck ck-button ck-off" 
            type="button" tabindex="-1" aria-labelledby="ck-editor__aria-label_e9">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" 
                viewBox="0 0 448 512" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg">
                <path d="M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM272 80v80H144V80h128zm122 352H54a6 6 0 0 1-6-6V86a6 6 0 0 1 6-6h42v104c0 13.255 10.745 24 24 24h176c13.255 0 24-10.745 24-24V83.882l78.243 78.243a6 6 0 0 1 1.757 4.243V426a6 6 0 0 1-6 6zM224 232c-48.523 0-88 39.477-88 88s39.477 88 88 88 88-39.477 88-88-39.477-88-88-88zm0 128c-22.056 0-40-17.944-40-40s17.944-40 40-40 40 17.944 40 40-17.944 40-40 40z"></path></svg>
                <span class="ck ck-tooltip ck-tooltip_s">
                <span class="ck ck-tooltip__text">Save</span>
            </span>
            <span class="ck ck-button__label" 
                id="ck-editor__aria-label_eab6ca34497f04b337a6d92eb665b73f9">
                Save
            </span>
        </button>
        `
        document.querySelector('.ck-toolbar').innerHTML += `<span class="ck ck-toolbar__separator"></span>`
        document.querySelector('.ck-toolbar').innerHTML += data
        document.getElementById('save__data').addEventListener('click', saveEditorData)
    }, [])

    const onBlur =  editor => {console.log( 'Blur.', editor )}
    const onFocused = editor => {console.log( 'Focus.', editor )}
    function init(editor){
        editorG = editor
    }

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