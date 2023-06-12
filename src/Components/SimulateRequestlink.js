

export const SimulateRequestlink = (props)=>{

    return(
        <div style={{fontWeight:"500",fontSize:"15px"}}>
            {props["requestType"]===0 ? (
                    <div>
                        http://localhost:8080/Servers
                    </div>
                ):props["requestType"]===1 ? (
                    <div>
                        http://localhost:8080/Servers/{props["id"]}
                    </div>
                ):props["requestType"]===2 ? (
                    <div>
                        http://localhost:8080/Servers_with_name/{props["name"]}
                    </div>
                ):props["requestType"]===3 ? (
                    <div>
                        http://localhost:8080/Servers
                    </div>
                ):(
                    <div>
                        http://localhost:8080/Servers/{props["id"]}
                    </div>
                )
            }
        </div>
    );
}