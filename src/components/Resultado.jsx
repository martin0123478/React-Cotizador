import React from 'react'
import useCotizador from '../hooks/useCotizador'
const Resultado = () => {
    const {resultado} = useCotizador()
  return (
    <div>
      {resultado}
    </div>
  )
}

export default Resultado
