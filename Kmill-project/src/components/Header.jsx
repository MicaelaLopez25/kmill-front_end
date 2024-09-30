import React from "react";
const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="ruta-a-tu-logo.png" alt="Logo" />
      </div>
      <nav className="nav">
        <ul>
          <li>
            <a href="#home">Inicio</a>
          </li>
          <li>
            <a href="+">Productos</a>
          </li>
          <li>
            <a href="#about">Nosotros</a>
          </li>
          <li>
            <a href="#contact">Contacto</a>
          </li>
        </ul>
      </nav>
      <div className="cart">
        <a href="#cart">
          <img src="ruta-a-icono-carrito.png" alt="" />
        </a>
      </div>
    </header>
  );
};

export default Header;
