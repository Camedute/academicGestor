import React, { useState } from "react";
import { Form, Input, Button } from "@nextui-org/react";
import { useAuth } from "../context/authContext";
const Login: React.FC = () => {
   const { signIn } = useAuth();
   const [isLoading, setIsLoading] = useState(false);
   const [formData, setFormData] = useState({
       email: "",
       password: ""
   });
   const [error, setError] = useState<string | null>(null);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
       setFormData({
           ...formData,
           [e.target.name]: e.target.value
       });
   };
    const handleSubmit = async (e: React.FormEvent) => {
       e.preventDefault();
       setError(null);
       setIsLoading(true);
        try {
           await signIn(formData.email, formData.password); // O la ruta a la que quieras redirigir después del login
       } catch (error) {
           setError(error instanceof Error ? error.message : "Error al iniciar sesión");
       } finally {
           setIsLoading(false);
       }
   };
    const handleReset = () => {
       setFormData({
           email: "",
           password: ""
       });
       setError(null);
   };
    return (
       <Form 
           className="w-full max-w-xs flex flex-col gap-3"
           onSubmit={handleSubmit}
       >
           {error && (
               <div className="text-red-500 text-sm mb-2">
                   {error}
               </div>
           )}
           
           <Input 
               label="Email"
               labelPlacement="outside"
               name="email"
               type="email"
               value={formData.email}
               onChange={handleChange}
               placeholder="Ingrese su correo"
               isRequired
               isDisabled={isLoading}
           />
           
           <Input 
               label="Contraseña"
               labelPlacement="outside"
               name="password"
               type="password"
               value={formData.password}
               onChange={handleChange}
               placeholder="Ingrese su contraseña"
               isRequired
               isDisabled={isLoading}
           />
           
           <Button 
               type="submit" 
               variant="flat" 
               disableRipple 
               isLoading={isLoading}
           >
               {isLoading ? "Ingresando..." : "Ingresar"}
           </Button>
           
           <Button 
               type="button" 
               variant="flat" 
               disableRipple 
               onClick={handleReset}
               isDisabled={isLoading}
           >
               Limpiar
           </Button>
       </Form>
   );
};
export default Login;