// rafc - componente react
export const TiposBasicos = () => {
    //codigo typescript
    //Tipos de datos - variables
    //cadena - string
    //let nombre: string | number = "Viviana"; 
    //nombre = 34;
    //let nombre: string = "Viniana";

    //tipos de datos - constante
    const nombre: string = "Viviana";
    const edad: number = 34;
    const donanteOrganos: boolean = true;

    //tipos de datos -  arreglos
    const poderes: string[] = ["velocidad", "volar", "invisibilidad"];
    //agregar elementos en el arreglo
    poderes.push("fuerza");
    
  return (
    <div>
      <h3>Tipos Básicos</h3>
      {nombre}, {edad}, {donanteOrganos ? "donante" : "no donante"}
      <br />
      {poderes.join(", ")}
    </div>
  )
}