import React from 'react'

export const NormalComponent = ({message}) => {
    console.log("I am Re Rendering")
    return (
        <div>
            <h2>message getting from Parent component:{message}</h2>
        </div>
    )
}
