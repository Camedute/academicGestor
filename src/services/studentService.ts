import { supabase } from "../utils/supabaseClient";

export const getStudents = async () => {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('role','student')
    

  if (error) {
    console.error('Error al obtener los estudiantes:', error); // Agregar más detalles del error
    throw error;
  }
  return data;
};
