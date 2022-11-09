import React from 'react'
import ClickCounter from './HigherOrderComponent/ClickCounter';
import HoverCounter from './HigherOrderComponent/HoverCounter';
import { ComponentChild } from './ComponentChild'


export const CompContainer = () => {
    const returnClickCounter=()=>{
        return <ClickCounter/>
    }
    const returnHoverCounter=()=>{
        return <HoverCounter/>
    }
    return (
        <div>
            <ComponentChild render={returnClickCounter}/>
            <ComponentChild render={returnHoverCounter}/>
        </div>
    )
}
