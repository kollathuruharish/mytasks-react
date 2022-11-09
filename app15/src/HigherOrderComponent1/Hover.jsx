import React from 'react'
import { Sample } from './Sample'

 const Hover = (props) => {

    return (
        <div>
            <h1 onMouseOver={props.handlehover}>You Hover{props.message}times</h1>
        </div>
    )
}
export default React.memo(Sample(Hover))
