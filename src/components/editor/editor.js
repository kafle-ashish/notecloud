

import React, { useState, useEffect } from 'react'
import './editor.css'
import {schema} from "prosemirror-schema-basic"
import {EditorState} from "prosemirror-state"
import {EditorView} from "prosemirror-view"
import {baseKeymap} from "prosemirror-commands"
import {keymap} from "prosemirror-keymap"
import {history} from "prosemirror-history"

export default function EditorDraft(){
    let state = EditorState.create(
        {schema,
        plugins: [
            history(),
            keymap({"Mod-z": undo, "Mod-y": redo}),
            keymap(baseKeymap)
          ]
        })
    
    useEffect(function(){
        let view = new EditorView(document.getElementById("editor"), {state})
    })
    return(
        <section className="content">
            <div className="tools"></div>
            <div className="editor" id="editor"></div>
        </section>
    )
}