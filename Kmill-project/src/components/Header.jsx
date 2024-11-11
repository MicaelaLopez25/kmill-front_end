import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserAlt, FaUserShield } from "react-icons/fa"; // Íconos de Admin y Usuario
import "./cssMainComp/header.css";

const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role"); // Obtener el rol desde localStorage

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role"); // También eliminar el rol al cerrar sesión
    navigate("/"); // Redirigir a la página de inicio de sesión
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
              <Link to="/productos">Productos</Link>
            </li>
            <li>
              <Link to="/nosotros">Nosotros</Link>
            </li>
            <li>
              <Link to="/pedido">Pedido</Link>
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
          {!token ? (
            <li>
              <Link to="/UserRoles">Ingresar</Link>
            </li>
          ) : (
            <>
              {/* Muestra el rol y el ícono correspondiente */}
              <li className="role-display abajo">
                {role === "Admin" ? (
                  <>
                    <FaUserShield size={20} style={{ marginRight: "5px" }} />
                    Admin
                  </>
                ) : (
                  <>
                    <FaUserAlt size={20} style={{ marginRight: "5px" }} />
                    Usuario
                  </>
                )}
              </li>
              <li>
                <button onClick={handleLogout} className="logout-button">
                  Salir
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;
