import { useState } from "react"



const MovieUI= ()=>{

const fav_movie ={
    title:"Dragonball Z the return of Broly",
    rating:8
}
const another_movie={
    title:"Dragonball Z if goku does not who will",
    rating:10

}



const [cool_movie,setMovie]=useState(fav_movie)
const changeMovie=()=>setMovie({...cool_movie,title:"Dragonball Super Broly",rating:5})


return(

    <>
        <h2> Favourite Movie{cool_movie.title}</h2>
         <p>Rating:{cool_movie.rating}</p>
        <button onClick={changeMovie}>nah! change that</button>
    </>




)




}

export default MovieUI