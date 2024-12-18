import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <Link to="/auth">
          <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors mb-4">
            Login/Register
          </button>
        </Link>
        <Link to="/home">
          <button className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors mb-4">
            Home
          </button>
        </Link>
        <Link to="/student">
          <button className="w-full bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 transition-colors">
            Estudiante
          </button>
        </Link>
      </div>
    </div>
  );
}

export default App;
