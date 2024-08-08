import { useState } from "react"
import { v4 as uuidv4 } from 'uuid'





export const Formulario = ({traigaDato})=>{

  const [datosCapturados, setDatosCapturados] = useState('')

  const capturaDatos = (e)=>{
    e.preventDefault()
    setDatosCapturados(e.target.value)
  }

  const manejoDato = (e)=>{
    e.preventDefault()
    datosCapturados? traigaDato(datosCapturados): alert('ingrese un dato')
    setDatosCapturados('')
  }

  return(

    <form>
      <input type="text" onChange={capturaDatos} value={datosCapturados}/>
      <button onClick={manejoDato}>Ingrese datos</button>
    </form>
  )

}








export const DatoIngresado = ({arrayDeDatos}) =>
  arrayDeDatos.map(dato=><p key={uuidv4()}>{dato}</p>)

  
