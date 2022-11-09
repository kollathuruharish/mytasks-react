import React,{useEffect,useState} from 'react'
import axios from 'axios';

export default function Football() {
    const [Football, setFootball] = useState([])
    useEffect(()=>{
        var options = {
            method: 'GET',
            url: 'https://api-football-v1.p.rapidapi.com/v3/timezone',
            headers: {
              'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
              'x-rapidapi-key': '605864a890mshe8c6b282fc0fde0p1bd4e6jsn86dfec6ea5c0'
            }
          };
        let URL = "https://api-football-v1.p.rapidapi.com/v3/timezone";
        axios.request(options).then(({data})=>{
            console.log(data)
            setFootball(data)
        })
    },[])
    return (
        <div>
            <h1>Teams</h1>
        </div>
    )
}
