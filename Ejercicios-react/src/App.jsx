import { useState } from 'react'
import './App.css'
import { ItemsProvider } from './Ejercicio 8/context/ItemsContext';
import { SearchProvider } from './Ejercicio 8/context/SearchContext';
import FilterListContext from './Ejercicio 8/filtrarLista';
import item from './Ejercicio 8/item';
import ListView from './Ejercicio 8/ListView';
// import Appform from './Ejercicio 7/form'
// import FilterList from './Ejercicio 5/FilterList'
// import TooltipsText from './Ejercicio 6/TooltipsText'
// import PresentationCard from './Ejercicio 2/PresentationCard'
// import Counter from './Ejercicio 3/Counter'
// import Timer from './Ejercicio 4/Timer'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className="App">
    
      {/* ejercicio 2 presentationCard*/}
          {/* <PresentationCard/> */}

       {/* ejercicio 3 counter */}
          {/* <Counter/> */}
       {/* Ejercicio 4 */}
           {/* <Timer/> */}
       {/* Ejercicio 5 */}
           {/* <FilterList/> */}
       {/* Ejercicio 6 */}
       {/* <div>
       <TooltipsText tooltip={'DIM'}>El Día Internacional de la Mujer</TooltipsText>, anteriormente denominado Día Internacional de la Mujer Trabajadora,
        1​2​ conmemora en cada 8 de marzo la lucha de las mujeres por su participación en la sociedad y s
        u desarrollo íntegro como persona, en pie de igualdad con el hombre. También se usa para hacer referencia 
        a esta conmemoración el numerónimo «8-M» en referencia al día y al mes en que se conmemora. 3​
        En la <TooltipsText tooltip={'CIMS'}>II Conferencia Internacional de Mujeres Socialistas</TooltipsText> realizada en Copenhague en 1910, 
        Zetkin propuso y se aprobó la celebración del «Día de la Mujer Trabajadora», que se comenzó a celebrar 
        al año siguiente:1​ la primera conmemoración se realizó el 19 de marzo de 1911 en Alemania, Austria, Dinamarca y Suiza.
        Desde entonces se ha extendido a otros muchos países.
        </div> */}
        {/* Ejercicio 7 */}
        {/* <Appform/> */}
        {/* Ejercicio 8 */}
        <FilterListContext/>
        
    </div>
    
  )
}

export default App
