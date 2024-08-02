import ReactDOM from 'react-dom/client'

import {Formulario, DatoIngresado} from './componentes.jsx'


const root = ReactDOM.createRoot(document.getElementById('root'))

const App = ()=>{


  const traigaDato = (dato)=>{console.log(dato)}


  return (

    <>
      <h1>INGRESO DE DATOS</h1>

      <Formulario traigaDato = {traigaDato}/>

      <DatoIngresado 
        
      
      
      />
      
    </>

    





  )
}



root.render(<App/>)


