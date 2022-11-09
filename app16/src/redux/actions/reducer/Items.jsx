import React, { Component } from 'react'
import { connect } from 'react-redux'

class Items extends Component {
    render() {
        return (
            <div>
    
                        <ul>
                            <li>No:{this.props.Items.no}</li>
                            <li>Name:{this.props.Items.name}</li>
                            <li>Version:{this.props.Items.version}</li>
                        </ul>
                    
            </div>
        )
    }
}

function PassingItem(state){
    return {
        Items:state.Items

    }
   
}

export default connect(PassingItem)(Items)
