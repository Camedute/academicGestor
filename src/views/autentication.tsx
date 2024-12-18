import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/authContext';

function Autentication() {
    /* TODO ESTO ES PARA ALTERNAR ENTRE REGISTRARSE E INICIAR SESIÓN*/ 
    const [isLogin, setIsLogin] = useState(true); // ingresar sesión (TRUE) registrarse (FALSE)
    const toggleView = () => {
        setIsLogin(!isLogin); // Alterna entre true y false
    };

    const {signIn} = useAuth();
    const {signUp} = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const trueAuth = async (e: React.FormEvent) => {
        e.preventDefault
        if (isLogin === true){
            try{
                await signIn(email,password);
                console.log("logeado con exito");
            } catch (error){
                console.log(error);
            }
        } else if (isLogin === false){
            try{
                await signUp(email,password);
                console.log("registrado con exito");
            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-2xl font-semibold mb-6 text-center">
                    {isLogin ? 'Ingresar sesión' : 'Registrarse'}
                </h1>
                <input
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={isLogin ? 'Ingrese su usuario' : 'Ingrese su nuevo usuario'}
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={isLogin ? 'Ingrese su contraseña' : 'Ingrese su nueva contraseña'}
                />
                <button
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors mb-4"
                    onClick={toggleView}
                >
                    {isLogin ? 'Ir a Registrarse' : 'Ir a Ingresar sesión'}
                </button>
                <button
                    type='submit'
                    onClick={trueAuth}
                    className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition-colors mb-4"
                >
                    {isLogin ? 'Iniciar Sesión' : 'Registrarse'}
                </button>
                <Link to="/">
                    <button className="w-full bg-gray-500 text-white py-2 rounded hover:bg-gray-600 transition-colors">
                        Regresar
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Autentication;
