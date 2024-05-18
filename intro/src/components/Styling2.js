

const dark_theme ={

    color:"white",
    backgroundColor:"black"    


}


const light_theme={

    color:"black",
    backgroundColor:"white"

}

const ThemedUi = (props)=> props.isdark?<h1 style={dark_theme}>Dark theme </h1>:<h1 style={light_theme}>Light Theme</h1>

export default ThemedUi