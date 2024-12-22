import React, { useState } from "react";
import { Form, Input, Button } from "@nextui-org/react";

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState({
    nameStudent: "",
    surnameStudent: "",
    emailStudent: "",
    passwordStudent: "",
    phoneGuardian: "",
    emailGuardian: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Datos del formulario:", formData);
  };

  return (
    <Form
      className="w-full max-w-lg grid grid-cols-1 md:grid-cols-2 gap-7"
      onSubmit={handleSubmit}
    >
      <Input
        isRequired
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
        errorMessage="Este campo es requerido"
        label="Correo Alumno"
        labelPlacement="outside"
        name="emailStudent"
        placeholder="Ingrese el correo"
        value={formData.emailStudent}
        onChange={handleChange}
      />
      <Input
        isRequired
        errorMessage="Este campo es requerido"
        label="Contraseña Alumno"
        labelPlacement="outside"
        name="passwordStudent"
        placeholder="Ingrese la contraseña"
        value={formData.passwordStudent}
        onChange={handleChange}
      />
      <Input
        isRequired
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
        errorMessage="Este campo es requerido"
        label="Correo Apoderado"
        labelPlacement="outside"
        name="emailGuardian"
        placeholder="Ingrese el correo"
        value={formData.emailGuardian}
        onChange={handleChange}
      />
      <div className="col-span-full flex align-center justify-center">
        <Button type="submit" variant="flat" color="primary" disableRipple>
          Registrarse
        </Button>
      </div>
    </Form>
  );
};

export default SignUp;
