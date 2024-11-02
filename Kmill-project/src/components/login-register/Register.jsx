import React, { useState } from "react";
import "../cssMainComp/register.css"; // Asegúrate de que la ruta sea correcta
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate(); // Inicializa el hook
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registro:", { username, email, password });
  };
  const handleBackClick = () => {
    navigate(-1); // Navega a la página anterior
  };
  return (
    <div className="centrar-container">
    <div className="register-container">
    <button onClick={handleBackClick} className="back-button">Atras</button>

      <h2>Crear Cuenta</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre de Usuario</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Correo Electrónico</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Contraseña</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Registrarse</button>
      </form>
      <p>
        ¿Ya tienes una cuenta? <a href="/login">Iniciar sesión</a>
      </p>
    </div>
    </div>
  );
};

export default Register;
