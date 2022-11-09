import React,{ useState } from 'react'
export default function Form() {
    const [formData, setformData] = useState([])
    const [form, setform] = useState({email:"",password:""});

    let handleChange=(e)=>{
        let newform={ ...form };
        newform[e.target.name]=e.target.value;
        setform(newform);
    }
    const createData=()=>{
        let newData=[ ...formData ];
        newData.push(form);
        setformData(newData);
    }
    
    return (
        <div>
        <form>
        <label htmlFor=''>Email</label>
        <input type="email" name="email"  value={form.email} onChange={(e)=>{handleChange(e)}} /><br/>
        <label htmlFor=''>Password</label>
        <input type="password" name="password"  value={form.password} onChange={(e)=>{handleChange(e)}}/><br/>
        <button type='button' onClick={createData} >Submit</button>
        </form>
        <table border="1">
        <thead>
        <th>Email</th>
        <th>Password</th>
        </thead>
        <tbody>
        {formData.map((form)=>{
            return <tr>
            <td>{form.email}</td>
            <td>{form.password}</td>
            </tr>
        })}
        </tbody>
        </table>
        </div>
    )
}
