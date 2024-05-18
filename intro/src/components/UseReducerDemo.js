
import '../css/UseReducerDemo.css'

import { useReducer } from 'react'
const defaultTheme={
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#c0e1c0",
    padding: "5rem",
    borderRadius: "1 rem",


}

const PalletUI=()=>{    


   
    const reducer=(settings,action)=>{

        switch(action.type){

            case "red":
                return{
                    ...settings,
                    backgroundColor:"#ca6d6d"

                };


            case "blue":
                return{

                    ...settings,
                    backgroundColor:"#656599"



                };


                case "yellow":
                    return{
    
                        ...settings,
                        backgroundColor:"#e2f389"
    
    
    
                    };

                    
                case "default":
                        return defaultTheme;



                    

                default:
                    return defaultTheme;


                

                


        }


    }
    const [settings,dispatch]=useReducer(reducer,defaultTheme)

  
    return(


        
<>


        <div className='card'>

            <div style={settings} >

                <div className='option_red' onClick={()=>{ dispatch({type:"red"})}}></div>
                <div className='option_blue' onClick={()=>{ dispatch({type:"blue"})}}></div>
                <div className='option_yellow' onClick={()=>{ dispatch({type:"yellow"})}}></div>

            </div>

        </div>






</>





    )


  



}

export default PalletUI