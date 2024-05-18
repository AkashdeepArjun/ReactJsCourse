

import { useState,useEffect } from "react";




const TestUseEffectLogic = ()=>{

    const [data,updateData]=useState([])


    useEffect(()=>{

        
        const getDataFromServer = async()=>{


            const response =await fetch("https://jsonplaceholder.typicode.com/posts")
            const d =await response.json()
            // if(d && d.length) updateData(d)
            d.length>0?updateData(d):console.log("lmao data did not fetched!!")

        }

        getDataFromServer()


    },[])
return (


    <>
    

        <ul>

        {data.map((d)=>(

                <li key={Math.random()*10}>{d.title}</li>

        ))}


        </ul>
        



    
    
    
    
    
    </>






)







}

export default TestUseEffectLogic