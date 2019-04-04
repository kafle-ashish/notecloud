

import React from 'react'
import './containers.css'
import NavBar from '../navbar/navbar'
import SignIn from '../signin/signin'

const NavContainer = function(){
    return(
        <NavBar>
          <span className="brand__name">NoteCloud</span>
          <span className="nav__items">
            <pre id="content" style={{whiteSpace:`pre-wrap`}}></pre>
            <SignIn/>
          </span>
        </NavBar>
    )
}

export default NavContainer