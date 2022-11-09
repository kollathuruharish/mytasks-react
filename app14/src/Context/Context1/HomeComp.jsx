import React from 'react'
import {ParentComp} from './ParentComp'

export const HomeComp = ({message}) => {
    return (
        <div>
            <hr />
            <h3>Message received from Container is:{message} </h3>
            <ParentComp/>
        </div>
    )
}
