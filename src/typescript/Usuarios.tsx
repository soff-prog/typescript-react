import { useEffect, useState } from "react"
import { reqResApi } from "../api/reqRes"
import type { ListaUsuarios, Usuario } from "../interfaces/interfaceUsers";

export const Usuarios = () => {
    //hook useState: permite manjar el estado de la lista de usuario
    const [users,setUsers]= useState<Usuario[]>([]);

    //hook useEffect: permite ejecutar codigo en segundo plano
    useEffect(() => {
        //llamar a la API
        reqResApi.get<ListaUsuarios>("/users")
        .then(resp =>{
            //console.log(resp.data.data);
            //modificar el valor de mi arreglo users con el arreglo el API
            setUsers(resp.data.data);
        })
        .catch(console.log);
    }, [])

    //funcion para mostrar dinamicamente la lista de usuarios en la tabla
    const itemUsuario = (usuario: Usuario) => {
        return(
            <tr>
                <td>Foto</td>
                <td>Soff</td>
                <td>soff@gmail.com</td>
            </tr>
        )
    }
    
  return (
    <div>
        <h3>Lista de Usuarios</h3>
        <table className="table">
            <thead>
                <tr>
                    <th>Avatar</th>
                    <th>Nombre</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Foto</td>
                    <td>Soff</td>
                    <td>soff@gmail.com</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
