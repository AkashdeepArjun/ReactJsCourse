import useWhatever from "../hooks/FetchingData";

import '../css/CustomHooks.css'

const TestCustomHook =()=>{

    const [potatoes] =useWhatever('https://jsonplaceholder.typicode.com/todos')



    return(

<>



{potatoes && potatoes.map((potato)=><p key={potato.id}>{potato.title}</p>)}
        

</>



    )








} 


export default TestCustomHook