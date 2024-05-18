
import { useState } from 'react'
import '../css/friends.css'

const FriendsUI=(props)=>{
    const [bros,updateFamily] =useState(props.friends)
    const addFriend=()=>{updateFamily([...bros,"popat"])}
    const removeFriend=()=>{updateFamily(bros.filter((f)=>f!="popat"))}

    const updateFriend=()=>{updateFamily(bros.map(f=>f==="aman"?"chutiya":f))}
    
return(
    
<>



{


bros.map((bro)=>(

        <ul>

<li key={Math.random()*100}>{bro}</li>

        </ul>
       

    ))
    
    


}



<button onClick={addFriend}>add more friends </button>
<button onClick={removeFriend}>remove friends </button>
<button onClick={updateFriend}>update </button>





   
    


</>



)



}


const friends= ["aman","gaurav","vijay"]

// const [buddies,updateFriends] = useState(friends)

const StateDemoArr = ()=><FriendsUI friends={friends}/>



export default StateDemoArr