

import React from 'react'
import './signincard.css'
import {handleAuthClick as signIn} from '../gapi/gapi'

const SignInCard = function(){

    return(
        <div id="sign__in__card" style={{display:`none`}}>
            <p className="sign__in__prompt">Sign in with Google account to save 
                    your files in Google Drive
            </p>
            <div className="btn btn__primary" onClick={signIn}>Sign In</div>
        </div>
    )
}

export default SignInCard