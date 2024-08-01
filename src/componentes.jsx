
import { useState } from "react";





/* COMPONENTE USADO PARA EL FORMULARIO */
export function ObtenerFormulario(props){

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
export function CuadroTexto({ data }){
  return <p>{data}</p>
}



