


import React, { useEffect } from 'react'
import { initClient as loader } from '../gapi/gapi'
import './signin.css'

import {IoMdLogOut as LogOut} from 'react-icons/io'
import {IoMdLogIn as LogIn} from 'react-icons/io'

const SignIn = function(){

    useEffect(function(){
        loader()
    })

    return(
        <span className="btn--group">
            <span title="Sign In" id="authorize_button" style={{display: `none`}}><LogIn className="icon"/></span>
            <span title="Sign Out" id="signout_button" style={{display: `none`}}><LogOut className="icon__red"/></span>
        </span>
    )
}

export default SignIn