const items =["SSD","DDR4 RAM","POWER SUPPLY","MOTHERBOARD","CABNET","PROCESSOR","THERMAL PASTE"]


const Cart =()=>{

    return(

        <>
        <h1>Cart 🚐</h1>

        {items.length>0 && <h2> you have {items.length} items in your cart</h2>}
        
        <ul>

        {items.map((item)=>(

        <li key={Math.random()*10}>{item}</li>

        ))}


        </ul>
        
        
        </>



    )

}

export default Cart