import { useState } from "react"


export const Formulario = ({traigaDato})=>{

  const [datosCapturados, setDatosCapturados] = useState('')

  const capturaDatos = (e)=>{
    e.preventDefault()
    setDatosCapturados(e.target.value)
  }

  const manejoDato = (e)=>{
    e.preventDefault()
    traigaDato(datosCapturados)
    setDatosCapturados('')
  }

  return(

    <form>
      <input type="text" onChange={capturaDatos} value={datosCapturados}/>
      <button onClick={manejoDato}>Ingrese datos</button>
    </form>
  )

}
















export const DatoIngresado = () =>{
  return(
    <p>dato ingresado</p>
  )
}


