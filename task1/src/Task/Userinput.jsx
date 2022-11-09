import React, { useState } from 'react'

const Userinput = () => {
    const [userData, setUserData] = useState({ str1: "", str2: "" });
    const [value, setValue] = useState([])
    const handleInput = (e) => {
        let myUser = { ...userData }
        myUser[e.target.name] = e.target.value
        setUserData(myUser)
    }
    const addData = () => {
        let array = [];
        array.push({ ...userData });
        setValue(array)
        clearForm();
    }
    const clearForm=()=>{
        setUserData({ str1: "", str2: ""})
    }
    return (
        <div>
            <div>
                <form>
                    Str 1 :<input type='text' name='str1' value={userData.str1} onChange={(e) => { handleInput(e) }} /> <br />
                    Str 2 :<input type='text' name='str2' value={userData.str2} onChange={(e) => { handleInput(e) }} /> <br />
                    <button type='button' onClick={addData}>Add</button>
                </form>
            </div>
         
            {value.length !== 0 ?
                <div>
                    <h1>Hello user</h1>
                    <table border='1px solid'>
                        <thead>
                            <tr>
                                <th>Index</th>
                                <th>Str 1</th>
                                <th>Str 2</th>
                            </tr>
                        </thead>
                        <tbody>
                            {value.map((val, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{i + 1}</td>
                                        <td>{val.str1}</td>
                                        <td>{val.str2}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div> : "No Data"}
        </div>
    )
}
export default Userinput;