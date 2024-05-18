

const Character =({name,img,universe,powerlevel,children})=>{

    return(

        <>
        <h1>{name}</h1>
        <img src ={img}></img>
        <p>{universe}</p>
        <p>{powerlevel}</p>
        {children}
        </>




    )






}

export default Character