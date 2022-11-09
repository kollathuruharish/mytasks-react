import React, { Component } from 'react'
import { connect } from 'react-redux'

class Products extends Component {
    render() {
        return (
            <div>
                {this.props.Products.map((prd)=>{
                    return <h1 key={prd}>{prd}</h1>
                })}
            </div>
        )
    }
}

function getproduct(state){
   return {
       Products:state.Products
   }
}


export default connect(getproduct)(Products)