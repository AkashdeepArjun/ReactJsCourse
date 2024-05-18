import { useState } from "react"





const FormUi= ()=>{

    const [user,setUser] = useState("")
    const magicSubmit=(event)=>{
        event.preventDefault()
        alert(`you entered ${user} username`)
    
    }

    const magicChange = (event)=>{ setUser(event.target.value)}

    return(

        <>

            <h1>Form Sample </h1>

            <form onSubmit={magicSubmit}> 

                <input type="text" value={user} onChange={magicChange}/>

                <button>login buddy</button>




            </form>
        
        
        
        
        </>


    )



}


export default FormUi