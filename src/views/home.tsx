import { Link } from "react-router";

function Home(){
    return(<>
    <p>vista home, para mostrar datos de los cursos para profesor</p>
    <p>y para el alumno, sus estadisticas de las diferentes clases</p>
    <Link to ="/"><button>Regresar</button></Link>
    </>)
}
export default Home;