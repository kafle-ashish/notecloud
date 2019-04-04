

import React from 'react'
import './editor.css'

const Editor = function(){
    return(
        <section className="content">
            <div className="tools"></div>
            <div className="editor" contentEditable>
            </div>
        </section>
    )
}

export default Editor