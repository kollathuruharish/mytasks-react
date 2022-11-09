import axios from 'axios';
import React, { Component } from 'react';

export default class Persondetails extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         person:{
             name:"",
             email:"",
             password:"",
             BloodGroup:""
         },
         persons:[],
      }
    }
    handleChange=(e)=>{
      let newperson={...this.state.person }
      newperson[e.target.name]=e.target.value

    }
    addPerson=()=>{
      let newpersons=[...this.state.persons]
      newpersons.push(this.state.person)
      axios.post("")
    }
  render() {
    return <div>
        <form>
            <label htmlFor="">Name : </label>
            <input type="text" name='name' value={this.state.person.name} onChange={(e)=>{this.handleChange(e)}}/><br />
            <label htmlFor="">Email : </label>
            <input type="text" name='email' value={this.state.person.email} onChange={(e)=>{this.handleChange(e)}}/><br />
            <label htmlFor="">Password : </label>
            <input type="text" name='password'  value={this.state.person.password} onChange={(e)=>{this.handleChange(e)}} /><br />
            <label htmlFor="">BloodGroup : </label>
            <input type="text" name='BloodGroup' value={this.state.person.BloodGroup} onChange={(e)=>{this.handleChange(e)}} /><br />
            <button type='button' onClick={this.addPerson}>Add</button>
        </form>

    </div>;
  }
}
