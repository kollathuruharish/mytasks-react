import React from 'react'
import { ConsumerComp } from '../ContextComp'

export const GrandChildComp = () => {
    return (
        <div>
            <ConsumerComp>
                {(val)=>(
              <h2>Hello from grandchild comp message:{val}</h2>
                )}
            </ConsumerComp>
        </div>
    )
}
