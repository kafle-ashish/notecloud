

import React from 'react'
import { FaRegFileAlt as Files } from 'react-icons/fa'
import './vmenu.css'

const Vmenu = function(){
    return(
        <nav className="vetical__menu">
                <span id="nav-menu-1" className="menu__btn active__menu" title="Notes" onClick={toggleActive}>
                    <Files className="menu__icons"/>
                </span>
                <span id="nav-menu-2" className="menu__btn" onClick={toggleActive}></span>
                <span id="nav-menu-3" className="menu__btn" onClick={toggleActive}></span>
                <span id="nav-menu-4" className="menu__btn" onClick={toggleActive}></span>
            </nav>
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

export default Vmenu