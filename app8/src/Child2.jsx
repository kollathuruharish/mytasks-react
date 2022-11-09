import React, { useState } from 'react'
export default function Child2(props) {
    const [state,setstate]=useState(["Lokesh","Kavin","Ajith","Tamil"])
    return (
        <div>
            <button onClick={()=>{props.receiveData(state)}}>click</button>
        </div>
    )
}