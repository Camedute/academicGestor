import React, { useState } from 'react';

import Login from '../components/login';
import SignUp from '../components/signup';


function Autentication() {
    /* TODO ESTO ES PARA ALTERNAR ENTRE REGISTRARSE E INICIAR SESIÓN*/ 
    const [isLogin, setIsLogin] = useState(true); // ingresar sesión (TRUE) registrarse (FALSE)
    const toggleView = () => {
        setIsLogin(!isLogin); // Alterna entre true y false
    };


    return (
        <>
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-2xl font-semibold mb-6 text-center">
                    {isLogin ? 'Inicie su sesión' : 'Registro'}
                </h1>
               {isLogin ? <Login /> : <SignUp />}
               <button onClick={toggleView}>cambiar</button>
            </div>
        </div>
        </>
    );
}

export default Autentication;
