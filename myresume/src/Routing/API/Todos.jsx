import axios from 'axios';
import React,{useEffect,useState} from 'react';

export const Todos = () => {
    const[todos,settodos]=useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/todos').then(({data})=>{
            console.log(data);
            settodos(data)

        })
    })
  return <div>
      <h1>hello from todos component</h1>
      {todos.map((todo)=>{
          return <li>{todo.title}</li>
      })}
      
  </div>;
};
