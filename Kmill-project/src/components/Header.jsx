import React from "react";
import "./cssMainComp/header.css";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token"); // Verifica si el token existe

  const handleLogout = () => {
    localStorage.removeItem("token"); // Elimina el token
    navigate("/"); // Redirige a la página de inicio de sesión
  };

  return (
    <header className="header">
      <div className="logo">
        <img src="logoCOOKIE.png" alt="Cookie" className="cookie-image" />
      </div>
      <nav className="nav">
        <div className="nav-left">
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="Productos">Productos</Link>
            </li>
            <li>
              <Link to="nosotros">Nosotros</Link>
            </li>
            <li>
              <Link
                to="#"
                onClick={() =>
                  document
                    .getElementById("footer")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="login">
        <ul>
          {!token ? ( // Si no hay token, muestra el botón de ingresar
            <li>
              <Link to="Login">Ingresar</Link>
            </li>
          ) : (
            // Si hay token, muestra el botón de salir
            <li>
              <button onClick={handleLogout} className="logout-button">
                Salir
              </button>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;


