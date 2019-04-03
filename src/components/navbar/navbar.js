

import React from 'react'
import './navbar.css'

const NavBar = function(props){
    return(
        <nav>
            {props.children}
        </nav>
    )
}

export default NavBar