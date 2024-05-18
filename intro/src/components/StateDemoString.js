import { useState } from 'react'
import '../css/StateDemo2.css'

const ProfileUi =()=>{

    const [name,updateName] =useState("Akashdeep Wadhwa")
    const [role,updateRole] = useState("Web Designer UX designer")

    const doSomething =()=>{updateName("Mr.Akashdeep Wadhwa")}
    return(
<>
        <div className="profile-ui">


            <div className="profile_photo"></div>

            <div className="userDetails">

                <p>{name} </p>
                <p>{role}</p>
            </div>


        </div>


        <button onClick={doSomething}>click here</button>

        



</>




    )





}

export default ProfileUi