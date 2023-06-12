

export const SimulateRequestType = (props) => {
    return(
        <div style={{fontWeight:"600",fontSize:"15px",width:"100%",alignItems:"center",justifyContent:"center",display:"flex"}}>
            {props["requestType"]<=2 ? (
                    <div style={{color:"purple"}}>
                        GET
                    </div>
                ):props["requestType"]===3?(
                    <div style={{color:"orange"}}>
                        PUT
                    </div>
                ):(
                    <div style={{color:"Red"}}>
                        DELETE
                    </div>
                )
            }
        </div>
    );
}