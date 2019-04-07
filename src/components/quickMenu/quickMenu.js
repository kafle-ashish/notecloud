

import React from 'react'
import './quickMenu.css'
import { FaPlus as Plus,FaMinus as Minus } from 'react-icons/fa'
import { MdRefresh as Refresh, MdCloudDownload as DownLoad, MdModeEdit as Rename } from "react-icons/md"

const QMenu = function(){
    function newFile(){
        let holder = document.getElementById("new__file")
        holder.style.display = `block`
        holder.style.width = `100%`
        holder.focus()
    }
    
    return (
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
    )
}

export default QMenu