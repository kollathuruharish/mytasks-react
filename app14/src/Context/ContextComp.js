import React from 'react'
import { ContainerComp } from './Context1/ContainerComp';

const ContextComp =React.createContext();

const ProviderComp=ContextComp.Provider;
const CompProvider=ContextComp.Provider
const CompConsumer=ContextComp.Consumer
const ConsumerComp=ContextComp.Consumer;



export{
    ProviderComp,ConsumerComp,CompConsumer,CompProvider
}