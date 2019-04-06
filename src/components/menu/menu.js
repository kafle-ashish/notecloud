

import React, { useState } from 'react'
import './menu.css'

import {
    uploadFiles,
    // createFolder,
    // getDriveInfo,
    // listFiles,

} from '../gapi/gapi'

import { FaRegFileAlt as Files } from 'react-icons/fa'
import { FaPlus as Plus } from 'react-icons/fa'
import { FaMinus as Minus } from 'react-icons/fa'
import { MdRefresh as Refresh } from 'react-icons/md'
import { MdCloudDownload as DownLoad } from 'react-icons/md'
import { MdFolder as Folder } from "react-icons/md"
import { MdModeEdit as Rename } from "react-icons/md";


const Menu = function(props){
    function fileName(e){
        if(e.key === 'Enter'){
        // console.log(e.currentTarget.value.replace(" ", ""))
        uploadFiles(e.currentTarget.value.replace(" ", ""), props.rootId)
        document.getElementById("new__file").style.display = `none`
        }
    }

    return(
        <aside className="menu">
            <nav className="vetical__menu">
                <span id="nav-menu-1" className="menu__btn active__menu" title="Notes" onClick={toggleActive}>
                    <Files className="menu__icons"/>
                </span>
                <span id="nav-menu-2" className="menu__btn" onClick={toggleActive}></span>
                <span id="nav-menu-3" className="menu__btn" onClick={toggleActive}></span>
                <span id="nav-menu-4" className="menu__btn" onClick={toggleActive}></span>
            </nav>
            <div className="menu__content">
                <div className="file__actions">
                    <span className="actions" title="New File (ctrl + N)" onClick={newFile}>
                        <Plus className="actions__icons" size="12px"/>
                    </span>
                    <span className="actions" title="Delete ( delete )">
                        <Minus className="actions__icons" size="12px"/>
                    </span>
                    <span className="actions" title="Refresh ( ctrl + R )">
                        <Refresh className="actions__icons" size="16px"/>
                    </span>
                    <span className="actions" title="Download ( ctrl + D )">
                        <DownLoad className="actions__icons" size="16px"/>
                    </span>
                    <span className="actions" title="Rename ( ctrl + shift + R )">
                        <Rename className="actions__icons" size="16px"/>
                    </span>
                </div>
                <div id="file__manager" className="file__manager">
                    <div className="file__root" onClick={populateFiles}>
                        <Folder className="actions__icons"/>
                        <span style={{padding:`0px 8px`}}>notecloud</span>
                    </div>
                    <div className="files" id="files__holder">
                    <input id="new__file" 
                        type="text" style={{display:`none`}} 
                        // onChange={fileName}
                        onKeyPress={fileName} 
                        placeholder="file name"/>
                    </div>
                </div>
            </div>
        </aside>
    )
}

function toggleActive(e){
    for(let i=1; i<=4; i++){
        if(i.toString() === e.currentTarget.id.split("-")[2]){
            e.currentTarget.classList.add("active__menu")
        }
        else{
            document.getElementById(`nav-menu-${i}`).classList.remove("active__menu")
        }
    }
}

function populateFiles(){
    document.getElementById("files__holder").innerHTML = 'Hola'
}

function newFile(){
    let holder = document.getElementById("new__file")
    holder.style.display = `block`
    holder.style.width = `100%`
    holder.focus()
}

export default Menu