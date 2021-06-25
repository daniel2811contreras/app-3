import { createContext, useState } from 'react'
import { props, value } from './interfaces'
import { initialStateCalculadora } from './initialState'

const CalculadoraContext = createContext<value>(initialStateCalculadora) 

const { Provider, Consumer } = CalculadoraContext

const CalculadoraProvider  = (props:props) => {
    const { children } = props
    const [name, setName] = useState<string>('daniel')
    const [contar, setContar] = useState<number>(0)
    return (
        <Provider 
            value={{
                name, setName,
                contar, setContar
            }}
        >
            {children}
        </Provider>
    )
}

export { CalculadoraProvider, Consumer as CalculadoraConsumer, CalculadoraContext} 