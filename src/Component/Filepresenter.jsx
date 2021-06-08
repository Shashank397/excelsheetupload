import React, { useState } from 'react'
import Showdata from './Showdata'

function Filepresenter() {

    const [file, setFile] = useState(null)
    const [showData, setShowData] = useState(false)

    const onFileSelect = (event) => {
        console.log("file has been selected => ", event.target.files[0])
        setFile(event.target.files[0])

    }


    const callShowData = () => {
        console.log("callShow data is called ==> ", showData)
        if (file != null) {
            return (
                <Showdata excelFile={file} />
            )
        }
    }

    return (
        <div>
            <h1>Show Excel Sheet</h1>
            <div>
                <div className="mb-3">
                    <input className="form-control form-control-sm mx-auto mt-5" style={{width: 400}} id="formFileSm" type="file" onChange={onFileSelect}/>
                </div>
                {callShowData()}
            </div>
        </div>
    )
}

export default Filepresenter
