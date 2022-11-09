import React from 'react'
import { Parent } from './Parent'

 const Hover = (props) => {
    return (
        <div>
            <img style={{width:"200px", height:"150px"}} onMouseOver={props.handlehover} src={props.url} alt="" />
        </div>
    )
}
export default React.memo(Parent(Hover))
