import React, { useState } from "react";
import "../cssMainComp/register.css"; // Asegúrate de que la ruta sea correcta
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate(); // Inicializa el hook
  const [username, setUsername] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState(""); // Corrige el nombre de la variable
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      nombre: username,
      apellido: lastname,
      email,
      telefono: telefono, // Asegúrate de que este campo esté correctamente definido
      password,
    };

    try {
      const response = await fetch("http://127.0.0.1:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        console.log("Registro exitoso");
        navigate("/login"); // Navegar a la página de inicio de sesión
      } else {
        const errorData = await response.json();
        console.error("Error en el registro:", errorData.message);
      }
    } catch (error) {
      console.error("Error de conexión:", error);
    }
  };

  // Definición de la función handleBackClick
  const handleBackClick = () => {
    navigate(-1); // Navega a la página anterior
  };

  return (
    <div className="centrar-container">
      <div className="register-container">
        <button onClick={handleBackClick} className="back-button">
          Atras
        </button>

        <h2>Crear Cuenta</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nombre de Usuario</label>
            <input
              type="text"
              value={username}
              placeholder="Ingrese Nombre"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Apellido de Usuario</label>
            <input
              type="text"
              value={lastname} // Cambia username por lastname
              placeholder="Ingrese su Apellido"
              onChange={(e) => setLastname(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Correo Electrónico</label>
            <input
              type="email"
              value={email}
              placeholder="Ingrese Correo Electronico"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Teléfono</label>
            <input
              type="text"
              value={telefono} // Cambia el nombre de la variable aquí
              placeholder="Ingrese su Teléfono"
              onChange={(e) => setTelefono(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Contraseña</label>
            <input
              type="password"
              value={password}
              placeholder="Ingrese su contraseña"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Registrarse</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
