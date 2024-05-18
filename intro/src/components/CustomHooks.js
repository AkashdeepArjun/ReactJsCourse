

import {useState,useEffect} from 'react'




const TestHook =()=>{


    const [todos,setTodos]=useState(null)


    useEffect(()=>{

        fetch('https://jsonplaceholder.typicode.com/todos').then(res=>res.json()).then((d)=>setTodos(d))




    })


    return (

        <>
        
            {todos && todos.map((todo)=><p key={todo.id}>{todo.title}</p>)}
        
        
        
        </>




    )



}


export default TestHook