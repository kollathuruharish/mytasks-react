import React from 'react'

export const ComponentChild = (props) => {
    return (
        <div>
            {props.render()}
        </div>
    )
}
