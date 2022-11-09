import React, { Component } from 'react'
import { connect } from 'react-redux'

class Image extends Component {
    render() {
        return (
            <div>
                {this.props.Image}
            </div>
        )
    }
}

function getImage(state){
    return {
        Image:state.Image
    }
}

export default connect(getImage)(Image)
