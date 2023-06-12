import { useEffect, useState } from 'react';
import '../Stylesheets/Simulate.css'
import { SimulateRequestBody } from './SimulateRequestBody'
import { SimulateRequestType } from './SimulateRequestType'
import { SimulateRequestlink } from './SimulateRequestlink'
import axios from "axios";
import { SimulateResponse } from './SimulateResponse';
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';

export const Simulate = (props)=>{
    const [open, setOpen] = useState(false);
    const [status,setStatus] = useState(202);
    const [response,setResponse] = useState([{"name": "my centos", "id": "123", "language":"java", "framework":"django" },{}]);


    const isJson = (s)=>{
        try {
            var res = JSON.parse(s);
        } catch (e) {
            return null;
        }
        return res;
    }

    const backedn_request = (method,url,data=null,headers=null)=>{
        console.log("getting request")
        console.log(method,url,data,headers)
        axios({
            mode:'no-cors',
            method:method,
            url:url,
            data:data,
            headers:headers
        }).then((e)=>{
            setStatus(e.status);
            setResponse(e.data);
            console.log(e.data)
            setOpen(false);
        }).catch((e)=>{
            console.log(e);
            setStatus(e.response.status);
            setResponse(e.data);
            setOpen(false);
        });
    }

    const send = ()=>{
        
        setOpen(true);
        var url = "http://localhost:8080"
        switch (props["requestType"]){
            case 0:
                url += "/Servers"
                backedn_request("GET",url) 
                break;
            case 1:
                url += "/Servers/"+props["id"]
                backedn_request("GET",url)
                break;
            case 2:
                url += "/Servers_with_name/"+props["name"]
                backedn_request("GET",url)
                break;
            case 3:
                console.log(props["putBody"])
                //console.log(eval(props["putBody"]))
                var req_body = isJson(props["putBody"]) 
                if ( req_body == null){
                    window.alert("wrong json form");
                    break;
                }
                console.log(req_body)
                url += "/Servers"
                backedn_request("PUT",url,req_body,{'Content-Type': 'application/json'})
                break;
            default:
                url += "/Servers/"+props["id"]
                backedn_request("DELETE",url)
                break;
        }
        //window.alert("back");
        //window.alert(status,response)
    }

    return(
        <div className='SimulateContainer'>
            <div className='SimulateRequest'>
                <div className='SimulateRequestUrl'>
                    <div className='SimulateRequestType'>
                        <SimulateRequestType requestType={props["requestType"]} />
                    </div>
                    <div className='SimulateRequestlink'>
                        <SimulateRequestlink requestType={props["requestType"]} name={props["name"]} id={props["id"]}/>
                    </div>
                    <div className='SimulateRequestButton' onClick={send}>
                        <div>Send</div>
                    </div>
                </div>
                <div className='SimulateRequestBody'>
                    <SimulateRequestBody requestType={props["requestType"]} setName={props["setName"]} setId={props["setId"]} putBody={props["putBody"]} setPutBody={props["setPutBody"]}/>
                </div>
            </div>
            <div className='SimulateResponse'>
                <SimulateResponse status={status} response={response}/>
            </div>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            >
              <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    )
}