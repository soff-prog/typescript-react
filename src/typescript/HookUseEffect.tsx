import { useEffect, useState } from "react"

export const HookUseEffect = () => {
    //hook useState: permite cambiar el estado de una variable, objeto
    const [valor, setValor] = useState<boolean>(false);

    //funcion que trabaje con el setValor par cambiar el estado
    const cambiarValor = (): void => {
        setValor(!valor);
    }

    //hook useEffect: permite ejecutar codigo en segundo plano dentro de nuetro componente
    //1. se monta o se carga el componente (siempre)
    //2. si existe una lista de dependencia
    useEffect(() => {
        //codigo a ejecutar en segundo plano
        console.log("Desde el useEffect");
    }, [valor]) //[] corchetes vacios no tienen dependencia
    //eliminar los corchetes para que se ejecute el hook cada vez que el componente sufre un cambio

  return (
    <div>
        <h3>Hook - UseEffect</h3>
        <button onClick={cambiarValor}>Cambiar</button>
        </div>
  )
}
