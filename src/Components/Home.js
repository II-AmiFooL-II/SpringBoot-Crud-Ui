import { useState } from 'react'
import '../Stylesheets/Home.css'
import { Nav } from './Nav'
import { Simulate } from './Simulate';

export const Home = ()=>{

    const [requestType,setRequestType] = useState(0);
    const [id,setId] = useState(0);
    const [name,setName] = useState("my centos");
    const [putBody,setPutBody] = useState(""); 
    console.log(requestType)
    return (
        <div className="Home">
            <div className='Box'>
                <div className="Nav">
                    <Nav requestType={requestType} setRequestType={setRequestType}/>
                </div>
                <div className="content">
                    <Simulate requestType={requestType} id={id} setId={setId} name={name} setName={setName} putBody={putBody} setPutBody={setPutBody}/>
                </div>
            </div>
        </div>
    )
}