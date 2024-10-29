import React from "react";
import "./cssMainComp/header.css"; // Asegúrate de que la ruta sea correcta
import Nosotros from "./Nosotros";
import "./cssMainComp/nosotros.css";
import { Link } from "react-router-dom"; // Importa Link de react-router-dom

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
            <a href="nosotros">Nosotros</a>
          </li>
          <li>
            <a href="#footer">Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header; // Exportar como default
