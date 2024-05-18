
import '../css/StateDemo.css'

import { useState } from 'react'

const Quantity=()=>{

    const [quanity,changeQuantity]=useState(0)
    const incQ=()=>{changeQuantity(quanity+1)}
    const decQ =()=>{changeQuantity(quanity>0?quanity-1:quanity)}
    return (
<>

        <h1>{quanity}</h1>
        <button className='inc' onClick={incQ}>+</button>
        <button className='dec' onClick={decQ}>-</button>


</>




    )


}


export default Quantity