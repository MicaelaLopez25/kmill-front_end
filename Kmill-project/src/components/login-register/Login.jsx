import React from "react";
import "../cssMainComp/login.css" // Asegúrate de que la ruta sea correcta
import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate(); // Inicializa el hook

  const handleBackClick = () => {
    navigate(-1); // Navega a la página anterior
  };
  return (
    <div className="login-container">
      <div className="login-card">
      <button onClick={handleBackClick} className="back-button">Atras</button>

        <h2>Iniciar Sesión</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input type="email" id="email" placeholder="Ingrese su correo" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" placeholder="Ingrese su contraseña" required />
          </div>
          <button type="submit" className="btn-login">Iniciar Sesión</button>
        </form>
        <div className="footer-links">
          <a href="recuperar">Olvidé mi contraseña</a>
          <a href="register">Crear una cuenta</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
