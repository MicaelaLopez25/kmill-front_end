import React from "react";
import "./cssMainComp/header.css"; // Asegúrate de que la ruta sea correcta

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="logoCOOKIE.png" alt="Cookie" className="cookie-image" />
      </div>
      <nav className="nav">
        <ul>
          <li>
            <a href="Inicio">Inicio</a>
          </li>
          <li>
            <a href="Productos">Productos</a>
          </li>
          <li>
            <a href="Nosotros">Nosotros</a>
          </li>
          <li>
            <a href="Contacto">Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header; // Exportar como default
