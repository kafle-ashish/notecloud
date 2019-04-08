

import React from 'react'
import './containers.css'
import NavBar from '../navbar/navbar'
import SignIn from '../signin/signin'
import { IoMdMenu } from 'react-icons/io'

const NavContainer = function(){
    return(
        <NavBar>
          <span className="__brand">
            <span className="ham__menu"><IoMdMenu size="40px"/></span>
            <span className="brand__name">NoteCloud</span>
          </span>
          <span className="nav__items">
            <pre id="content" style={{whiteSpace:`pre-wrap`}}></pre>
            <SignIn/>
          </span>
        </NavBar>
    )
}

export default NavContainer