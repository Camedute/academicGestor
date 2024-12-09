import { Link } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <Link to ="/auth"><button>login/register</button></Link>
      <Link to ="/home"><button>home</button></Link>
      <Link to ="/report"><button>reportes</button></Link>
      <Link to ="/student"><button>estudiante</button></Link>
    </>
  )
}

export default App
