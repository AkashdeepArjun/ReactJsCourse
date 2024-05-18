const users =[

    {
        name:"akash",
        email:"akashsky786786@gmail.com",
        location:"IN"

    },
    {
        name:"aman",
        email:"aman14561@gmail.com",
        location:"IN"

    },{
        name:"popat",
        email:"poplu@gmail.com",
        location:"IN"

    }


]


const ShowUsers =()=>{return(

<>

    {users.map((user)=>(

        <ul key={Math.random()*10}>
                
            <li>{user.name}</li>
            <li>{user.email}</li>
            <li>{user.location}</li>

        </ul>



    ))}



</>


)}

export default ShowUsers