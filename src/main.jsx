import ReactDOM from 'react-dom/client'
import {Formulario, DatoIngresado} from './componentes.jsx'
import { useState } from 'react'


const root = ReactDOM.createRoot(document.getElementById('root'))






const App = ()=>{


  const [arrayDeDatos, setArrayDeDatos] = useState([])

  
  
  
  const traigaDato = (dato)=>{
    const arrayProvicional = [dato, ...arrayDeDatos]
    setArrayDeDatos(arrayProvicional)
  }


  return (

    <>
      <h1>INGRESO DE DATOS</h1>

      <Formulario traigaDato = {traigaDato}/>

      <DatoIngresado arrayDeDatos={arrayDeDatos}/>
      
    </>
  )
}



root.render(<App/>)


