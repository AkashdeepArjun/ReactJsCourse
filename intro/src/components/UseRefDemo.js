

import '../css/UseReducerDemo.css'

import { useRef } from 'react'

const PalleteChoice =()=>{

const divElement=useRef(null)



const makeRedBigger=()=>{
    console.log(divElement.current)
    divElement.current.style.backgroundColor="green"

}

    return(


        
        <>
        
        
                <div className='card'>
        
                    <div className='card_layout'>
                        <input type="text"></input>
                        <div className='option_red'ref={divElement}> </div>
                        <div className='option_blue' ></div>
                        <div className='option_yellow' ></div>
                        <button onClick={()=>makeRedBigger()}>Make Red Bigger</button>
                    </div>
        
                </div>
        
        
        
        
        
        
        </>
        
        
        
        
        
            )
}

export default PalleteChoice