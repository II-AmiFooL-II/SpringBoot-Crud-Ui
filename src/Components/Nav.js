import '../Stylesheets/Nav.css'

export const Nav = (props) =>{
    const Card = {
        padding : "20px",
        border : "2px solid violet",
        ":hover" : {
            backgroundColor: "#ff0000",
            cursor: "default"
        }
    };
    return (
        <div className='container'>
            <ul className='ui'>
                <li className='li' onClick={()=>props["setRequestType"](0)} style={{filter: props["requestType"]===0?"brightness(55%)":"brightness(100%)"}}> GET all servers </li>
                <li className='li' onClick={()=>props["setRequestType"](1)} style={{filter: props["requestType"]===1?"brightness(55%)":"brightness(100%)"}}> GET Server by id </li>
                <li className='li' onClick={()=>props["setRequestType"](2)} style={{filter: props["requestType"]===2?"brightness(55%)":"brightness(100%)"}}> GET Server by Name </li>
                <li className='li' onClick={()=>props["setRequestType"](3)} style={{filter: props["requestType"]===3?"brightness(55%)":"brightness(100%)"}}> PUT Server </li>
                <li className='li' onClick={()=>props["setRequestType"](4)} style={{filter: props["requestType"]===4?"brightness(55%)":"brightness(100%)"}}> DELETE Server </li>
            </ul>
        </div>
    );
}