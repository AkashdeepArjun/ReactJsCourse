
const Valid =(props)=><h1 className={props.bg}>Valid Password</h1>

const Invalid =(props)=><h1 className={props.bg}>Invalid Password!!</h1>



const CheckPassword = ({isvalid})=>isvalid?<Valid bg="green"></Valid>:<Invalid bg="red"></Invalid>


export default CheckPassword