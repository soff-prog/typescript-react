//rafc + enter

import { useState } from "react"

export const Contador = () => {
    //hook useState: permite cambiar el estad (valor) de variables, arreglos, objetos, componentes
    const [contador,setContador] = useState<number>(0);

    //funcion que va a trabajar con el setContador para actualizar el estado del contador
    const cambiarContador = (numero: number): void => {
        //llamar la funcion setContador para  modificar el estado del contador
        setContador(contador + numero);
    }
    //funcion que va a trabajar con el setContador para actualizar el estado del contador
    const cambiarContador2 = (numero: number): void => {
        //llamar la funcion setContador para  modificar el estado del contador
        setContador(contador - numero);
    }

  return (
    <div>
        <h3>Contador: <small>{contador}</small></h3>
        <button className="btn btn-primary" 
            onClick={() => cambiarContador(1)}> 
            +1 </button>
        &nbsp;
        <button className="btn btn-primary"
            onClick={() => cambiarContador2(1)}> 
            -1 </button>
    </div>
  )
}
