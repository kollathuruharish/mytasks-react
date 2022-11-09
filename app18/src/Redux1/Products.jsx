import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllProductsAction } from './Actions'
// import { getAllProductsAction } from '../redux/reducer/Action'
 class Products extends Component {
    getAllProductsDetails=()=>{
        this.props.dispatch(getAllProductsAction())
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Hello from Products component</h1>
                <button onClick={this.getAllProductsDetails}>click me</button>
                {this.props.Products.map((prds)=>{
                    return <h1>{prds}</h1>
                })}
            </div>
        )
    }
}
function  mapStateToProps(state) {
    return {
        Products:state,
    }
}
export default connect(mapStateToProps)(Products)