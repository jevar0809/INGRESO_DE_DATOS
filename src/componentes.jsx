
import { useState } from "react";



/* se debe instalar el paquete uuidv4 para generar numeros aleatorios */
import { v4 as uuidv4 } from 'uuid'


/* Lo primero es identificar que tiene el componente exportado a main.jsx: 'ListaDeTareas' */




/* COMPONENTE USADO PARA EL FORMULARIO */
function ObtenerFormulario(props){

  const [datoInput, setDatoInput] = useState("")




  /* con esta funcion obtengo el dato ingresado por el usuario  */
  const obtenerDatos =(e)=>{
    e.preventDefault()
    setDatoInput(e.target.value)
  }



  /* cuando se clica el boton del formulario se evalua que hayan datos guardados en la variable 'datoInput' usando un operador ternario */
  const manejarEnvio = (e)=>{
    e.preventDefault()
    /* si hay datos en el input, estos se colocan como argumentos en la funcion que trae el componente <ObtenerFormulario /> */
    datoInput ? props.traigoDatoInput(datoInput) : alert('ingrese datos')

    /* luego colocamos un texto vacio en el input para borrar los datos escritos */
    setDatoInput('')


  }


  /* 
  
    Este componente retorna un <form> con dos elementos: un input y un boton.

    Para capturar los datos del input se usa el evento 'onChance' que a su vez ejecuta una funcion
    
    Cada vez que se pulsa el boton se usa el evento 'onClick' que a su vez ejecuta una funcion 
  
  
  
  
  
  */

  return(
    <form>
        <input type="text" value={datoInput} onChange={obtenerDatos} ></input>
        <button onClick={manejarEnvio}>agregar Dato</button>
    </form>
  )

}







/* COMPONENTE USADO PARA EL TEXTO QUE APARECE DEBAJO DEL FORMULARIO */
function CuadroTexto({ data }){
  return <p>{data}</p>
}









/* COMPONENTE EXPORTADO 'LISTA DE TAREAS' */
export function ListaDeTareas(){

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







