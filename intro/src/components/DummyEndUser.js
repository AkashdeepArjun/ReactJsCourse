import { Info, Info1 } from "../App"
import DummyServer from "./DummyServer"

import { useContext } from "react"

const style_user={
    backgroundColor:"purple",
    padding:"24px",
    border:"2px dashed",
    color:"white",
    borderRadius:"16px"
}

const DummyEndUser = ()=>{

const user=useContext(Info)

const role=useContext(Info1)

return (
    <>

<div style={style_user}>Hello Mr {user} welcome to our website  your role as {role} counts towards our success</div>      
    
    </>
)




}


export default DummyEndUser