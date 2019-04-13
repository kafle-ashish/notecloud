

import React from 'react'
import Vmenu from '../vmenu/vmenu'
import QMenu from '../quickMenu/quickMenu'
import './menu.css'

import FileManager from '../file/file'

const Menu = function(props){
    return(
        <aside id="__menu" className="menu">
            <Vmenu/>
            <div className="menu__content">
                <QMenu/>
                <FileManager/>
            </div>
        </aside>
    )
}

export default Menu