import { Link } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <Link to ="/auth"><button>Regresar</button></Link>
      <Link to ="/home"><button>Regresar</button></Link>
      <Link to ="/report"><button>Regresar</button></Link>
      <Link to ="/student"><button>Regresar</button></Link>
    </>
  )
}

export default App
