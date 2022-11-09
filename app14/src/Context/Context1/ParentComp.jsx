import React from 'react'
import { CompConsumer, ConsumerComp } from '../ContextComp'
import {ChildComp} from './ChildComp'

export const ParentComp = ({message}) => {
    return (
        <div>
            <CompConsumer>
               {(val)=>{
                   return <h2>Hello:{val.Data.name}</h2>
               }}
           </CompConsumer>
           
        </div>
    )
}
