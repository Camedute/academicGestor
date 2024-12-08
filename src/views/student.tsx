import { Link } from "react-router-dom";

function Student(){
    return(<>
    <p>vista para mostrar datos especificos de un alumno</p>
    <p>para especialmente un profesor</p>
    <Link to ="/"><button>Regresar</button></Link>
    </>)
}
export default Student;