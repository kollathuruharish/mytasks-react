import React, { Component } from 'react'

export default class Practice extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             Brands:["Intel","Toshiba","Bosch","Philips"]
        }
    }
    static getDerivedStateFromProps(props,state){
        console.log("hello from getDerivedStateFromProps")
        return null
   }
   shouldComponentUpdate(){
        console.log("Hello from shouldComponentUpdate ")
        return true
   }
   getSnapshotBeforeUpdate(){
       console.log("Hello from getSnapshotBeforeUpdate")
       return null

   }
   componentDidUpdate(){
       console.log("Hello from componentDidUpdate")

   }
    usersBrands=()=>{
        this.setState({Brands:["Micromax","peterengland","Basics","Iphone"]})
    }

    
    render() {
        return (
            <div>
                <button onClick={this.usersBrands}>Change Brands</button>
                <ul>{this.state.Brands.map((array,i)=>{
                    return <li key={i}>{array}</li>
                })}</ul>
            </div>
        )
    }
}
