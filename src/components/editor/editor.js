

import React from 'react'
import './editor.css'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function Editor(){
    function onEditorInit(editor){
        // You can store the "editor" and use when it is needed.
        console.log( 'Editor is ready to use!', editor );
        console.log(editor.config.width)
    }

    function onEditorChange( event, editor ) {
        const data = editor.getData();
        console.log({ event, editor, data })
    }

    return(
        <section className="content">
            <div className="tools"></div>
            <CKEditor
                    editor={ ClassicEditor }
                    data="<p>Hello edit me.</p>"
                    type="classic"
                    onInit={ onEditorInit }
                    onChange={ onEditorChange }
                />
        </section>
    )
}