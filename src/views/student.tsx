import { useEffect, useState } from "react";
import { getStudents } from "../services/studentService";
import { Link } from "react-router-dom";

// Definir el tipo de estudiante
interface Student {
  id: string;
  first_name: string;
  last_name: string;
}

const Student = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch de estudiantes
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const data = await getStudents();
        setStudents(data);
      } catch (err) {
        setError("Error al cargar los estudiantes. Inténtalo de nuevo.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  // Renderización condicional mientras carga o hay error
  if (loading) return <p className="text-center text-blue-500">Cargando datos...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Lista de Estudiantes</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="text-left px-4 py-2">Alumno</th>
              <th className="text-left px-4 py-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr
                key={student.id}
                className="hover:bg-gray-100 border-b border-gray-200"
              >
                <td className="px-4 py-2">
                  {student.first_name} {student.last_name}
                </td>
                <td className="px-4 py-2 space-x-2">
                  <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
                    Asistencia
                  </button>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                    Notas
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 text-center">
        <Link to="/">
          <button className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600">
            Regresar
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Student;
