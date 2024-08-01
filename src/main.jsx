
import ReactDOM from "react-dom/client";

import { useState } from "react";

/* se debe instalar el paquete uuidv4 para generar numeros aleatorios */
import { v4 as uuidv4 } from 'uuid'

import { ObtenerFormulario, CuadroTexto } from './componentes'


const root = ReactDOM.createRoot(document.getElementById('root'))




function App(){

  const [array, setArray] = useState([])

  

  /* esta funcion construira el array de los datos que se ingresen por el input */
  const agregarTarea = (datoInput)=>{
    const NewArray = [datoInput, ...array]
    setArray(NewArray)

  }
  
  





  /* 
  vemos que retorna dos componentes que se pintaran en el DOM: 
    <ObtenerFormulario /> es la combinacion de un input con un boton, un pequeño formulario
    <CuadroTexto /> es el texto que aparece debajo del mini formulario con los datos que se escribieron en el input 

  Este ultimo se pintara siempre y cuando haya un dato en el input. 


  Para pintar los datos del input debajo del mini formulario usamos un arreglo (array), de esta forma cada vez que se renderice la pagina pintara los datos que el array contenga.


  Para hacer dicho arreglo, usamos un useState que inicialmente tendra un arreglo vacio: const [array, setArray] = useState([])

  A este arreglo vacio le añadiremos los datos capturados por el input del formulario. Para traer dichos datos usamos un prop en el componente <ObtenerFormulario /> pero este prop es una funcion que construira el array


  Una vez este el array construido con algun dato, se mapea usando el metodo .map() y por cada dato que haya en el array se retornara el componente <CuadroTexto />



  */
  return(
    <>

    <h1>INGRESO DE DATOS</h1>

      <ObtenerFormulario traigoDatoInput={agregarTarea} />

      {
        array.map((data)=>
          <CuadroTexto
            data = {data}
            key = {uuidv4()}
          />)
      }
    </>
  )


}




root.render(<App />)
