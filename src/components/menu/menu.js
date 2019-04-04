

import React from 'react'
import './menu.css'

const Menu = function(){
    function toggleActive(e){
        for(let i=1; i<=4; i++){
            if(i == e.target.id.split("-")[2]){
                e.target.classList.add("active__menu")
            }
            else{
                document.getElementById(`nav-menu-${i}`).classList.remove("active__menu")
            }
        }
    }

    return(
        <aside className="menu">
            <nav className="vetical__menu">
                <span id="nav-menu-1" className="menu__btn" onClick={toggleActive}></span>
                <span id="nav-menu-2" className="menu__btn" onClick={toggleActive}></span>
                <span id="nav-menu-3" className="menu__btn" onClick={toggleActive}></span>
                <span id="nav-menu-4" className="menu__btn" onClick={toggleActive}></span>
            </nav>
            <div className="menu__content">
            </div>
        </aside>
    )
}

export default Menu