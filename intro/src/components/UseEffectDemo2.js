
import { useState,useEffect } from "react";

import '../css/UseEffectdemo.css'


const TestUE =()=>{

    const [salary,updateSalary]=useState(10000)

    const promotion =()=>updateSalary(salary+3000)

    useEffect(()=>{


        console.log("updated")

        document.title=`${salary}`

    },[])

    return(

        <>
        
        <h1>{salary}</h1>
        <button onClick={promotion}>Promote</button>

        
        
        
        </>




    )




}

export default TestUE