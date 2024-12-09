import { useEffect, useState } from "react";
import { getStudents } from "../services/studentService";
import { Link } from "react-router-dom";

const Student = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUsers = async () => {
          try {
            const data = await getStudents();
            setUsers(data);
          } catch (err) {
            setError('Error al cargar los usuarios');
            console.error(err);
          } finally {
            setLoading(false);
          }
        };
      
        fetchUsers();
      }, []);
      
    if (loading) return <p>Cargando datos...</p>
    if (error) return <p>{error}</p>
    return (
        <>
        <div>
          <h1>Lista de Usuarios</h1>
          <table>
            <thead>
              <tr>
                <th>Alumno</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user: any) => (
                <tr key={user.id}>
                  <td>{user.nombreAlumno}</td>
                  <td><button>Asistencia</button></td>
                  <td><button>Notas</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Link to={'/'}><button>Regresar</button></Link>
        </>
      );
};
export default Student;