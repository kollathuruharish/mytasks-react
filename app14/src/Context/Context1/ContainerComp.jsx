import React,{useState} from 'react'
import { CompProvider, ProviderComp } from '../ContextComp'
import { GrandChildComp } from './GrandChildComp'
import { HomeComp } from './HomeComp'


export const ContainerComp = () => {
    const [message, setmessage] = useState("Hello from container component")
    const [Data, setData] = useState({
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
          "street": "Kulas Light",
          "suite": "Apt. 556",
          "city": "Gwenborough",
          "zipcode": "92998-3874",
          "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
          }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
          "name": "Romaguera-Crona",
          "catchPhrase": "Multi-layered client-server neural-net",
          "bs": "harness real-time e-markets"
    }})
    return (
        <div>
            <ProviderComp value={message}>
                <CompProvider value={Data}>
            <HomeComp/>
            <h2>Hello</h2>
            <GrandChildComp/>
            </CompProvider>
            </ProviderComp>
        </div>
    )
}
