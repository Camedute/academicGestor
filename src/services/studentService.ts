import { supabase } from "../utils/supabaseClient";

export const getStudents = async () => {
  const { data, error } = await supabase
    .from('Alumno')
    .select('*');

  if (error) {
    console.error('Error al obtener los estudiantes:', error); // Agregar más detalles del error
    throw error;
  }
  return data;
};
