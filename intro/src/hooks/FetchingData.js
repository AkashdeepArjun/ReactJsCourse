import { useState,useEffect } from "react";


const useWhatever=(url)=>{

    const [anydata,updateData]=useState(null);

    useEffect(()=>{

        fetch(url).then(res=>res.json()).then(d=>updateData(d))

    },[url])

    return [anydata]

}

export default useWhatever