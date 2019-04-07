

import React from 'react'
import Vmenu from '../vmenu/vmenu'
import QMenu from '../quickMenu/quickMenu'
import './menu.css'

import FileManager from '../file/file'

const Menu = function(props){
    return(
        <aside className="menu">
            <Vmenu/>
            <div className="menu__content">
                <QMenu/>
                <FileManager files={props.files}/>
            </div>
        </aside>
    )
}

export default Menu