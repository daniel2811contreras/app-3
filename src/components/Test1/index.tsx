import { useEffect, useContext } from 'react'
import { CalculadoraContext } from '../../context/calculadora'

function Test1() {
  const {
    name, setName,
    contar, setContar 
  } = useContext(CalculadoraContext)

  useEffect(() => {
    setName('pepe')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[contar])

  return (
    <div className="App">
         <h1>hola mundo {name}</h1>
         <h3>copntador {contar}</h3>
        <button onClick={() => setContar(contar ? contar+1 : 1) }> 1+ </button> 
      </div>
  )
}

export default Test1
