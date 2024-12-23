import React, { useState } from "react";
import { Form, Input, Button } from "@nextui-org/react";
import { useAuth } from "../context/authContext";

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState({
    nameStudent: "",
    surnameStudent: "",
    emailStudent: "",
    passwordStudent: "",
    phoneGuardian: "",
    emailGuardian: "",
  });

  const { signUp } = useAuth();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    // Validaciones básicas
    if (!formData.emailStudent.includes('@')) {
      setError('El correo del estudiante debe ser válido');
      setIsLoading(false);
      return;
    }

    if (formData.passwordStudent.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres');
      setIsLoading(false);
      return;
    }

    if (!formData.emailGuardian.includes('@')) {
      setError('El correo del apoderado debe ser válido');
      setIsLoading(false);
      return;
    }

    try {
      await signUp(formData.emailStudent, formData.passwordStudent);
      // Aquí podrías agregar lógica para guardar el resto de la información del usuario
    } catch (error) {
      setError(error instanceof Error ? error.message : "Error al registrar usuario");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form
      className="w-full max-w-lg grid grid-cols-1 md:grid-cols-2 gap-7"
      onSubmit={handleSubmit}
    >
      {error && (
        <div className="col-span-full text-red-500 text-sm text-center">
          {error}
        </div>
      )}
      
      <Input
        isRequired
        isDisabled={isLoading}
        errorMessage="Este campo es requerido"
        label="Nombre Alumno"
        labelPlacement="outside"
        name="nameStudent"
        placeholder="Ingrese el nombre"
        value={formData.nameStudent}
        onChange={handleChange}
      />
      <Input
        isRequired
        isDisabled={isLoading}
        errorMessage="Este campo es requerido"
        label="Apellidos del Alumno"
        labelPlacement="outside"
        name="surnameStudent"
        placeholder="Ingrese los apellidos"
        value={formData.surnameStudent}
        onChange={handleChange}
      />
      <Input
        isRequired
        isDisabled={isLoading}
        type="email"
        errorMessage="Ingrese un correo válido"
        label="Correo Alumno"
        labelPlacement="outside"
        name="emailStudent"
        placeholder="Ingrese el correo"
        value={formData.emailStudent}
        onChange={handleChange}
      />
      <Input
        isRequired
        isDisabled={isLoading}
        type="password"
        errorMessage="La contraseña debe tener al menos 6 caracteres"
        label="Contraseña Alumno"
        labelPlacement="outside"
        name="passwordStudent"
        placeholder="Ingrese la contraseña"
        value={formData.passwordStudent}
        onChange={handleChange}
      />
      <Input
        isRequired
        isDisabled={isLoading}
        type="tel"
        errorMessage="Este campo es requerido"
        label="Teléfono Apoderado"
        labelPlacement="outside"
        name="phoneGuardian"
        placeholder="Ingrese el teléfono"
        value={formData.phoneGuardian}
        onChange={handleChange}
      />
      <Input
        isRequired
        isDisabled={isLoading}
        type="email"
        errorMessage="Ingrese un correo válido"
        label="Correo Apoderado"
        labelPlacement="outside"
        name="emailGuardian"
        placeholder="Ingrese el correo"
        value={formData.emailGuardian}
        onChange={handleChange}
      />
      <div className="col-span-full flex align-center justify-center">
        <Button 
          type="submit" 
          variant="flat" 
          color="primary" 
          disableRipple
          isLoading={isLoading}
          isDisabled={isLoading}
        >
          {isLoading ? 'Registrando...' : 'Registrarse'}
        </Button>
      </div>
    </Form>
  );
};

export default SignUp;