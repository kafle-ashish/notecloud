


import React, { useEffect } from 'react'
import { initClient as loader } from '../gapi/gapi'

const SignIn = function(){

    useEffect(function(){
        loader()
    })

    return(
        <div>
            <button id="authorize_button" style={{display: `none`}}>Authorize</button>
            <button id="signout_button" style={{display: `none`}}>Sign Out</button>
            <pre id="content" style={{whiteSpace:`pre-wrap`}}></pre>
        </div>
    )
}

export default SignIn