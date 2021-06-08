import Button from 'react-bootstrap/Button'
import React, { useState } from 'react'
import readExcelFile from 'read-excel-file'
import './../../node_modules/bootstrap/dist/css/bootstrap.min.css'


function Showdata(props) {

    const [child, setChild] = useState(null)


    const createTable1 = () => {
        let child = null;
        let head = true;
        let childNode = [];
        let count = 1;
        readExcelFile(props.excelFile).then(rows => {
            let rChild = []
            rows.map(row => {
                let dChild = []
                row.map(element => {
                    if(head){
                        dChild.push(<th scope="col" key={Math.random()}>{element}</th>)
                    }
                    else{
                        dChild.push(<td key={Math.random()}>{element}</td>)
                    }
                })
                if(head){
                    rChild.push(<thead style={{background: "black", color: "white"}}><tr><th scope="col">No</th>{dChild}</tr></thead>)
                    head = false
                }
                else{
                    childNode.push(<tr key={Math.random()}><td scope="row">{count}</td>{dChild}</tr>);
                    count ++
                }
            })
            rChild.push(childNode);
            return rChild;
        }).then(ans => {
            console.log("child vlaue ==> ", ans)
            setChild(ans)
        })
    }

    const present = () => {
        if (child != null) {
            return (<table className="table">{child}</table>)
        }
    }

    return (
        <div>
            <Button type="button" class="btn btn-primary" onClick={() => createTable1()} >present</Button>
            <div className="container-fluid">
                <div className="row col-10 mx-auto mt-5">
            {present()}
            </div>
            </div>
        </div>
    )
}

export default Showdata
