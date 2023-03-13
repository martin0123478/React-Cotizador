import { marcas,years,planes} from '../constants'
import { Fragment, } from 'react'
import useCotizador from '../hooks/useCotizador'

const Formulario = () => {

    const {datos,handleChangeDatos} = useCotizador()
    
  return (
    <>

    
    <form>
        <div className="my-5">
            <label className="block mb-3 font-bold text-gray-400 uppercase">
                Marca
            </label>
            <select name="marca" className="w-full p-3 bg-white border
            border-gray-200"
            value={datos.marca}
            onChange={e => handleChangeDatos(e)}>
                <option value="">--Selecciona Marca--</option>
                {
                    
                    marcas.map(marca =>(

                        <option value={marca.id}
                        key={marca.id}>
                            {marca.nombre}

                    </option>
                        
                    ))
                }
            </select>
            
        </div>

        <div className="my-5">
            <label className="block mb-3 font-bold text-gray-400 uppercase">
                Año
            </label>
            <select name="year" className="w-full p-3 bg-white border
            border-gray-200"
            value={datos.year}
            onChange={e => handleChangeDatos(e)}>
                <option value="">--Selecciona Año--</option>
                {
                    
                    years.map(year =>(

                        <option value={year}
                        key={year}>
                            {year}
                            

                    </option>
                        
                    ))
                }
            </select>
            
        </div>

         <div className="my-5">
            <label className="block mb-3 font-bold text-gray-400 uppercase">
                Plan
            </label>
            <div className='flex gap-3 items-center'>
                {planes.map(plan =>(
                    <Fragment key={plan.id}>
                        <label>
                            {plan.nombre}
                        </label>
                        <input type="radio"
                        name='plan'
                        value={plan.id}
                        onChange={e => handleChangeDatos(e)} />

                    </Fragment>
                ))}
            </div>
            
        </div>

        <input type="submit"
        className='w-full bg-indigo-500 hover:bg-indigo-600 transition-colors
        text-white cursor-pointer p-3 uppercase font-bold ' value="Cotizar" />
    </form>
    </>
  )
}

export default Formulario
