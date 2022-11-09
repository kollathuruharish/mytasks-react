import { useState } from "react"
export const Chandu = ()=>{
    let [message,setmessage]=useState("")
    let [employee,setemployee]=useState({fname:"",lname:""})
    let [user,setuser]=useState([])
    function changingmessage(){
        setmessage("Image")
    }
    function assignObject(){
        setemployee({fname:"Harish",lname:"Kumar"})
    }
    function assignArray(){
        setuser(["lokesh","sadik","chandu","saranya"])
    }
    return <div>
        <h2>{message}</h2>
        <button onClick={changingmessage}>change</button>
        <hr />
        <h2>{employee.fname}</h2>
        <h3>{employee.lname}</h3>
        <button onClick={assignObject}>change object</button>
        <hr />
        <h2>{user}</h2>
        <button onClick={assignArray}>change Array</button>
    </div>
}
export default Chandu