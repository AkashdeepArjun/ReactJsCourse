
import {useState} from 'react'
import '../css/Watchlist.css'
const ArrayObjUI =()=>{

    const movie1={id:1,title:"Dbz the battle of gods",rating:4}

    const movie2={id:2,title:"Dbz the bojack",rating:8}

    const [watchlist,updateWatchList] = useState([movie1,movie2])

    const magic =()=>{

        updateWatchList(watchlist.map((movie)=>(

            movie.id==1?{...movie,title:"Dragonball The rise of Legends by Akira Toriyama"}:{...movie,title:"Dragonball the legacy of bardock"}

        )))

    }

    return <>

   {watchlist.map((movie)=>(


    <li key={Math.random()*10}>{movie.title}</li>

   ))}


   <button onClick={magic}>Change Name </button>


    </>



}

export default ArrayObjUI