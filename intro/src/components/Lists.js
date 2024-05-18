const nos =[1,2,3,4,5]

const ListSample = ()=>{

        return(

            <>
            
            {
                nos.map((n)=>(
                <ul key={Math.random()*10}><li>{n}</li></ul>

                ))


            }
            
            
            
            
            </>




        )




}

export default ListSample