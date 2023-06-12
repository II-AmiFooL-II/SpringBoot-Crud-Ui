

export const SimulateRequestBody = (props)=>{

    return (
        <div>
            <div className="forms">
                <label className="forminput">Server ID</label>
                <input type="Number" id="id" onChange={(e)=>props["setId"](e.target.value)} disabled={props["requestType"]!==1&&props["requestType"]!==4} value={props["requestType"]===1 || props["requestType"]===4 ?props["id"]:""}/><br/><br/>
                <label className="forminput" >Server Name</label>
                <input type="text" id="name" onChange={(e)=>props["setName"](e.target.value)} disabled={props["requestType"]!==2} value={props["requestType"]!==2?"":props["name"]}/><br/><br/>
            </div>
            <div className='txtbox'>
                <textarea rows={22} cols={90} placeholder="enter information is json format ..." disabled={props["requestType"]!==3} value={props["requestType"]!==3?"":props["putBody"]} onChange={(e)=>props["setPutBody"](e.target.value)}/>
            </div>
        </div>
    );
}