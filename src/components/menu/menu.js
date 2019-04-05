

import React from 'react'
import './menu.css'
import { FaRegFileAlt as Files } from 'react-icons/fa'
import { FaPlus as Plus } from 'react-icons/fa'
import { FaMinus as Minus } from 'react-icons/fa'
import { MdRefresh as Refresh } from 'react-icons/md'
import { MdCloudDownload as DownLoad } from 'react-icons/md'

const Menu = function(){
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

    function uploadFiles(){
        window.gapi.client.request({
            'path': 'https://www.googleapis.com/drive/v3/files',
            'method': 'POST',
            'params':{'uploadType': 'multipart'},
            'body': {
                "name": "testing.txt",
                'parents': ["parent folder id goes here"],
                'mimeType' : 'application/plain'
            }
          })
            .then(function(data){
              console.log(data, "is here")
            })
            .catch(function(err){
              console.log(err)
            })
    }

    function createFolder(){
        window.gapi.client.request({
            'path': 'https://www.googleapis.com/drive/v3/files',
            'method': 'POST',
            'params':{'uploadType': 'multipart'},
            'body': {
                "name": "testing",
                'mimeType' : 'application/vnd.google-apps.folder'
            }
          })
            .then(function(data){
              console.log(data, "is here")
            })
            .catch(function(err){
              console.log(err)
            })
    }


    return(
        <aside className="menu">
            <nav className="vetical__menu">
                <span id="nav-menu-1" className="menu__btn" title="Notes" onClick={toggleActive}>
                    <Files className="menu__icons"/>
                </span>
                <span id="nav-menu-2" className="menu__btn" onClick={toggleActive}></span>
                <span id="nav-menu-3" className="menu__btn" onClick={toggleActive}></span>
                <span id="nav-menu-4" className="menu__btn" onClick={toggleActive}></span>
            </nav>
            <div className="menu__content">
                <div className="file__actions">
                    <span className="actions" title="New File (ctrl + N)" onClick={uploadFiles}>
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
                </div>
                <div id="file__manager" className="file__manager">
                </div>
            </div>
        </aside>
    )
}

export default Menu