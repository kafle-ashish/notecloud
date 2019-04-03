


import React, { useEffect } from 'react'
import { initClient as loader } from '../gapi/gapi'
import './signin.css'

const SignIn = function(){

    useEffect(function(){
        loader()
    })

    return(
        <span className="btn--group">
            <button id="authorize_button" style={{display: `none`}}>Log In</button>
            <button id="signout_button" style={{display: `none`}}>Sign Out</button>
        </span>
    )
}

export default SignIn