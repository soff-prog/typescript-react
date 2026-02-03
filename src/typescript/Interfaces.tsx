//rafc - componente de react

//crear una interface que define la estructura del objeto persona
interface Persona { 
    nombreCompleto: string;
    edad: number;
    direccion: Direccion;
}

interface Direccion {
    pais: string;
    ciudad: string;
    casaNumero: number;
}

export const Interfaces = () => {

    //crear objeto
    const persona: Persona = {
        nombreCompleto: "Viviana",
        edad: 34,
        direccion:{
            pais: "Ecuador",
            ciudad: "Quito",
            casaNumero: 345
        }
    }

    //acceder a las propiedades del objeto
    //persona.nombre;
    //las interfaces no se pueden instanciar
    //const personaInstancia = new persona();
    
  return (
    <div>
        <h3>Interfaces</h3>
        {JSON.stringify(persona)}
    </div>
  )
}
