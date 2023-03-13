import {createContext,useState} from 'react'
import {obtenerDiferencia,calcularMarca,calcularPlan,formatearCantidad} from  '../helpers'
const CotizadorContext = createContext()

const CotizadorProvider = ({children}) =>{


    const [datos,setDatos] = useState({
        marca:'',
        year:'',
        plan:'  '
    })

    const [error,setError] = useState('')

    const handleChangeDatos = e =>{
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    const cotizarSeguro  = () =>{
       let resultado = 2000

       const diferencia = obtenerDiferencia(datos.year)
       resultado -= ((diferencia * 3 )* resultado) / 100
       resultado *= calcularMarca(datos.marca)
       resultado *= calcularPlan(datos.plan)
       resultado = formatearCantidad(resultado)
       console.log(resultado)

       
    }

 

    return(
        <CotizadorContext.Provider
            value={{
                datos,
                handleChangeDatos,
                error,
                setError,
                cotizarSeguro
            }}
        >
            {children}
        </CotizadorContext.Provider>
    )
}

export {
    CotizadorProvider
}

export default CotizadorContext