import { useState } from "react"

const Samplechild =(props)=>{
    const [Array,setArray]=useState(["Redmi","vivo","Nokia","Samsung"])
    return (
        <div>
            <button onClick={()=>{props.receiveData(Array)}}>swipe</button>
        </div>
    )

}
export default Samplechild