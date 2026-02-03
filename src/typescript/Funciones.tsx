export const Funciones = () => {
    //funciones return
    const sumar = (): number =>{
        //llamar funcion void
        mensaje();
        return 1 + 2;
    }

    //Funcion return con parametro
    const multiplicar = (num1: number, num2: number): number =>{
        return num1 * num2;
    }

    //funciones void
    const mensaje = (): void => {
        console.log("Holaa");
    }

  return (
    <div>
        <h3>Funciones</h3>
        <span>El resultado de la suma es: {sumar()}</span>
        <br />
        <span>El resultado de la multiplicacion es: {multiplicar(7, 2)}</span>
    </div>
  )
}
