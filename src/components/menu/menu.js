

import React from 'react'
import './menu.css'
import { FaRegFileAlt as Files } from 'react-icons/fa'

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
                <span id="nav-menu-1" className="menu__btn" onClick={toggleActive}>
                    <Files className="menu__icons"/>
                </span>
                <span id="nav-menu-2" className="menu__btn" onClick={toggleActive}></span>
                <span id="nav-menu-3" className="menu__btn" onClick={toggleActive}></span>
                <span id="nav-menu-4" className="menu__btn" onClick={toggleActive}></span>
            </nav>
            <div className="menu__content">
                <div id="file__manager" className="file__manager">
                    <button onClick={uploadFiles}>Upload</button>
                </div>
            </div>
        </aside>
    )
}

export default Menu