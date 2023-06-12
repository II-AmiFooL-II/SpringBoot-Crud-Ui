

export const SimulateResponse = (props) =>{
    const status_codes = {
        404:"NOT FOUND",
        202:"ACCEPTED",
        201:"CREATED",
    }
    return(
        <div >
            <div className="SimulateResponseBody">
                <div className="ResponseStatus" style={{color:props["status"]<300?"#74B72E":"red",fontWeight:"600"}}>{props["status"]}</div>
                <div className="ResponseWord" style={{color:props["status"]<300?"#74B72E":"red",fontWeight:"600"}}>{status_codes[props["status"]]}</div>
            </div>
            <div className="ResponseData">
                {typeof(props["response"])==="string"?(
                    <div>{props["response"]}</div>
                ):typeof(props["response"])==="object"&&props["response"].length>0?(<div>{props["response"].map((item,index) => (<pre>
                        {JSON.stringify(item, null, 2)}
                        </pre>))}
                    </div>):typeof(props["response"])==="object"?(<div><pre>{JSON.stringify(props["response"], null, 2)}</pre></div>)
                    :(<div>[ ]</div>)
                }
            </div>
        </div>
    );

}