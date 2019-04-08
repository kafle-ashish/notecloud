

import React from 'react'
import './file.css'
import { uploadFiles,
    // createFolder,
    // getDriveInfo,
    // listFiles,
} from '../gapi/gapi'
import { MdFolder as Folder, MdInsertDriveFile as File} from "react-icons/md";
import SignInCard from '../signInCard/signInCard';

const FileManager = function(props){
    function populateFiles(){
        document.getElementById("files__holder").innerHTML = 'Hola'
    }

    function fileName(e){
        if(e.key === 'Enter'){
            // console.log(e.currentTarget.value.replace(" ", ""))
            uploadFiles(e.currentTarget.value.replace(" ", ""), props.rootId)
            document.getElementById("new__file").style.display = `none`
        }
    }

    const explorerFiles = (
        props.files.length !== 0 ? props.files.map((file)=>(
               <div className="file__content">
                    <File />
                    <span style={{marginLeft:`5px`}}>{file.name.split('.txt')[0]}</span>
                </div>
            )): <div id="signin__c">
                    <SignInCard/>
                </div>
        )
          
    const input = (<input id="new__file" type="text" style={{display:`none`}} 
                    onKeyPress={fileName} placeholder="file name"/>)

    return (
        <div id="file__manager" className="file__manager">
                    <div className="file__root" onClick={populateFiles}>
                        <Folder className="actions__icons"/>
                        <span style={{padding:`0px 8px`}}>notecloud</span>
                    </div>
                        <div className="files" id="files__holder">{input}{explorerFiles}</div>
        </div>
    )
}

export default FileManager