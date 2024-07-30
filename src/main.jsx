
import ReactDOM from "react-dom/client";
import { ListaDeTareas } from './componentes'


const root = ReactDOM.createRoot(document.getElementById('root'))




function App(){
  return  (
    <div ><ListaDeTareas /></div>
  )
}




root.render(<App />)
